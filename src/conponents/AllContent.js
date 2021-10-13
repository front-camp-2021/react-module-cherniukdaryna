import SideBar from "./SideBar";
import Card from "./Card";
import Pagination from "./Pagination";
import Input from "./Input";


function AllContent() {
    return (
        <div className="all-content">
            <SideBar />
            <section className="content">
                <Input />
                <Card />
            </section>
            <Pagination />
        </div>
    )
}

export default AllContent;