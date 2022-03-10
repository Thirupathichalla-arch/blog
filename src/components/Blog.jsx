import React from "react";
import { Input, Button } from 'antd';
import {BlogList} from "../Context/BlogContext"
export const Blog = () => {
    const [blogData, setBlogData] = React.useState({});
    const { handleBlogs,addData, handlSetData,setAddData } = React.useContext(BlogList);
    //console.log(React.useContext(BlogList))
    const handleChange = (e) => {
        //console.log(e.target.value)
        const {name, value} = e.target;
        setBlogData({...blogData, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setBlogData({ ...blogData, Time:"march-10-2022"})
        console.log(blogData)
        handleBlogs(blogData);
        //setAddData(!addData);
        handlSetData()
    }
    return <div>
        <form>
            <Input type="text" name='Title' onChange={handleChange} placeholder="Enter your title"></Input>
            <Input type="text" name='Image'  onChange={handleChange} placeholder="enter your image"></Input>
            <Input type="text" name='Writer' onChange={handleChange} placeholder="Enter  writer"></Input>
            <Button onClick={handleSubmit}>ADD POST</Button>
        </form>
    </div>
}