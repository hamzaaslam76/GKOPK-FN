import React from 'react';
import { Pagination } from 'antd';
import "./pagination.css";

function CustomPagination(props){
return(
    <Pagination className={`gkopk-pagination ${props.className ? props.className : "" }`} current={props.currentPage} total={props.totalRecords} />
)
}

export default CustomPagination;