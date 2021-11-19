import React, { useContext, useState } from "react";
import { Context } from "../context/ContextHeroes.js";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from "axios";
import SearchResults from "./SearchResults.jsx";
const SearchHero = () => {
  const [error,setError] = useState(false);
  const { setData , data} = useContext(Context);
  const key = 4545531308826736;
        return (
          <div className="row mt-5">
            <h2>look for your favorite hero</h2>
            <div className="col-lg-5">
            <Formik
                initialValues={{
                  search : "",
              }}
              validate={({search})=> {
                  let errors = {}
                  if(!search.trim() && data.length <= 0){
                      errors.search = "empty field"
                  }
                  return errors
              }}
              onSubmit={async ({search},{resetForm}) =>{
                const resp = await axios(`https://superheroapi.com/api/${key}/search//${search}`)
                if(resp.data.response === "error"){
                  setError(true)
                  resetForm({search:""})
                  setData([])
                }else{
                  setError(false)
                  setData(resp.data.results)
                  resetForm({search:""})
              }
          }}
          >
            {({errors})=>(
            <Form>
            <Field 
                    type="text" 
                    className="form-control" 
                    id="search"
                    name="search"
                    autoComplete="off"
                    placeholder="Search here"
                    />
                    <ErrorMessage name="search" component={()=> <p className="text-danger">{errors.search}</p>}/>
            <button className="btn btn-secondary mt-2" type="submit">search</button>
            </Form>
            )}
          </Formik>
          </div>
          <div className="col-12">
           
          { !error ? <SearchResults />  : <h1>No results</h1>}
          </div>
    </div>
  );
};

export default SearchHero;
