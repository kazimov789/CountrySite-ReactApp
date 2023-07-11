import React from 'react'

function HeaderFilter() {
  return (
<div className="container mt-3">
    <div className="row justify-content-between">
        <div className="col-lg-5 d-flex ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
        </div>
        <div className="col-lg-2">
            <select  className="form-select">
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="ocenia">Ocenia</option>
            </select>
        </div>
    </div>
</div>
    )
}

export default HeaderFilter