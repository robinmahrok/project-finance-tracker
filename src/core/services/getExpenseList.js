// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default function getExpenseList () {
  return axios.get("http://localhost:8000/transactions").then((response)=>{
    if(response?.data){
      return response.data;
    } else {
      throw "API not giving proper response"
    }
  }).catch((error)=>{
    console.log(error)
  })
}
