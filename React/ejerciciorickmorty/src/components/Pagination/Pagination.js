export default function Pagination({ page, setPage, maxPage }) {

    console.log(maxPage);

    function nextPage(){
         setPage(page+1);
    }

    function previousPage(){
         setPage(page-1);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" onClick={()=>setPage(1)}>Primera Página</a></li>
                <li class="page-item"><a class="page-link" onClick={previousPage}>Previous</a></li>
                <li class="page-item"><a class="page-link">{page}</a></li>
                <li class="page-item"><a class="page-link" onClick={nextPage}>Next</a></li>
                <li class="page-item"><a class="page-link" onClick={()=>setPage(maxPage)}>Última Página</a></li>
            </ul>
        </nav>
    )
}