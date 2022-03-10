import React from "react"
import { BlogList } from "../Context/BlogContext";
import { Modal,Input,Button } from "antd";
import { Blog } from "./Blog";
export const Homepage = () => {
    const { blogData, deleteblogs, editblogs,handleBlogs,handlSetData,addData,setAddData } = React.useContext(BlogList);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [editData, setEditData] = React.useState({});
    const [search, setSearch] = React.useState([]);
    const showModal = (name) => {
        deleteblogs(name);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    
    const handleChange = (e) => {
        //console.log(e.target.value)
        const {name, value} = e.target;
        setEditData({...editData, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setEditData({ ...editData, Time:new Date()})
        handleBlogs(editData);
        setIsModalVisible(false);

    }
    const handleSearch = (e) => {
        let val = e.target.value;
        let query = blogData.filter((e) => {
            return e.Title.includes(val);
        })
        setSearch(query);
    };
    console.log(search);
    return <>
        <div style={{display: 'flex',}}>
            <div style={{width:"40%",marginLeft: "30%"}}>
                <div >{addData ? <Blog value={addData,setAddData} /> : null}</div>
                <Button type='primary' style={{display: !addData? 'Block':"none",margin:"auto"}} onClick={()=>{setAddData(!addData)}}>POST A BLOG</Button>
            </div>
            <div style={{width:"20%",margin: "auto"}}>
                <Input type="text" name='search' placeholder="Enter your search" onChange={handleSearch} />
                <div style={{display: search.length > 0 ? "block" : "none"}}>
                    {search.map((e) => <p key={e.Title }>{e.Title}</p>)}
                </div>
            </div>
        </div>
        {blogData?<div style={{ display: 'grid',gridTemplateColumns:"repeat(4,25%)",marginLeft:"5%"}}>
            {blogData.map((e) => {
                return (<div key={e.Title}>
                    <img src={e.Image} style={{width:"200px",height:"150px",marginTop:"10px"}}></img>
                    <p style={{fontSize:"medium",}}>{e.Title}</p>
                    <p>{e.Writer}</p>
                    <p>{ "10-March-2022" }</p>
                    <Button  onClick={()=> deleteblogs(e.Title)}>Delete</Button>
                    <Button onClick={() => showModal(e.Title)}>Edit</Button>
                </div>)
            })  
        }
        </div> : null}
        <div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input type="text" name='Title' onChange={handleChange} placeholder="Enter your title"/>
                <Input type="text" name='Image'  onChange={handleChange} placeholder="enter your image"/>
                <Input type="text" name='Writer' onChange={handleChange} placeholder="Enter  writer"/>
                <Button onClick={handleSubmit}>Edit POST</Button>
        </Modal>
        </div>

    </>
}