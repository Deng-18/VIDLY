import React from 'react'
import _ from 'lodash'

const Pagination = (props) => {
    const { pageSize, itemsCount, currentPage, handlePageChange } = props;

    const pagesCount = Math.ceil(itemsCount / pageSize)    
    const pages =  _.range(1, pagesCount + 1)

    
    return (
        <div>
            <nav>
                <ul className="pagination justify-content-center">
                    {
                        pages.map(page => (
                            <li className={currentPage === page ? "page-item active" : "page-item" }
                                key={page} style={{ cursor:'pointer' }}
                                onClick={() => handlePageChange(page)}
                                >
                                <span className="page-link">{page}</span>  
                            </li>
                        ))
                    }
                </ul>
            </nav>            
        </div>
        )
    }

export default Pagination;
