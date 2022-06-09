export default function Pagination({ page, setPage, maxPage }) {

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination mb-4">
                <li className="page-item"><button className="page-link" onClick={() => setPage(1)}>Primera Página</button></li>
                <li className="page-item"><button className="page-link"  onClick={() => page>1 ? setPage(page - 1) : setPage(1)}>Previous</button></li>
                <li className="page-item"><button className="page-link">{page}</button></li>
                <li className="page-item"><button className="page-link" onClick={() => setPage(page + 1)}>Next</button></li>
                <li className="page-item"><button className="page-link" onClick={() => setPage(maxPage)}>Última Página</button></li>
            </ul>
        </nav>
    )
}