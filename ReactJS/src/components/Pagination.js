import React from 'react'
const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav id = "nav-pagination">
            <ul id = "ul-pagination" className="Pagination" >
                {pageNumbers.map(number =>(
                    <li id = "li-pagination" key = {number} className="active">
                        <a id = "a-pagination"  href = "!#" onClick = {(e) => { paginate(number); e.preventDefault();}} className="page-link">
                            {number}
                        </a>
                        
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
