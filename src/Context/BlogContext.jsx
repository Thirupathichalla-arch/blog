import React from "react";

export const BlogList = React.createContext();

export const BlogListProvider = ({ children }) => {
    const [blogData, setBlogData] = React.useState([]);
    const [addData, setAddData] = React.useState(false);
    const handlSetData = () => {
        setAddData(!addData);
    }
    const handleBlogs = (blog) => {
        setBlogData([...blogData,blog]);
        console.log('data from context', blogData);
    }
    const deleteblogs = (name) => {
        let a = blogData.filter((e) => {
           return e.Title != name;
        })
        setBlogData(a);
    }
    const editblogs = (blog) => {
        let a=blogData.filter((e) => {
            return blog.Title != e.Title;
        })
        setBlogData({ ...a, blog });
    }
    return (<BlogList.Provider value={{ handleBlogs, addData, handlSetData,setAddData,blogData,deleteblogs,editblogs }}>{ children }</BlogList.Provider>)
}