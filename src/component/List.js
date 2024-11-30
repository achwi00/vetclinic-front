import React, {useState} from "react";
import '../../src/styles/visit.css'

function List({ items = [], itemsPerPage = 5, renderItem, styleClass }) {
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className={styleClass}>
            {/* Render the list items */}
            <ul>
                {paginatedItems.map((item, index) => (
                    <li key={item.id || index}>
                        {renderItem ? renderItem(item) : item}
                    </li>
                ))}
            </ul>

            {/* Pagination controls */}
            <div>
                <button className="page-nav-btn"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    Previous
                </button>
                <button className="page-nav-btn"
                    disabled={startIndex + itemsPerPage >= items.length}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default List;