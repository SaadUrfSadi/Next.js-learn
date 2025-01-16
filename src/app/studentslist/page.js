import Link from "next/link";

export default function StudentList(){
    return(
        <>
        <div>
            <h1>Student list</h1>
            <ul>
                <li>
                    <Link href="/studentslist/saad">Saad</Link>
                </li>
                <li>
                    <Link href="/studentslist/hussain">hussain</Link>
                </li>
                <li>
                    <Link href="/studentslist/syed">Syed</Link>
                </li>
                <li>
                    <Link href="/studentslist/sadi">sadi</Link>
                </li>
                <li>
                    <Link href="/studentslist/urf">urf</Link>
                </li>
            </ul>
        </div>
        </>
    )
}