import React, {useState} from 'react';
import axios from 'axios'

export default (props)=> {
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");

    useEffect (()=>{
        if(props.obj) {
            setFname(props.obj.lname)
            setLname(props.obj.lname)
    }},[])

    const handleSubmit = e => {
        e.preventDefault();
        if(props.obj._id){
            axios.put('http://localhost:8000/api/persons/'+props.obj._id, {
                fname,lname
            })
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
        }
        axios.post('http://localhost:8000/api/persons', {
            fname,lname
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type='text' onChange={(e)=>{setFname(e.target.value)}} value={fname} />
            <input type='text' onChange={(e)=>{setLname(e.target.value)}} value={lname} />
            <input type='submit' value='Add Person' />
        </form>
    )
}