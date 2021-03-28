import React from "react"
import NavBar from "./components/NavBar"
import AddSemesterButton from "./components/AddSemesterButton"

export default function Home() {
    return (
        <div>
            <NavBar />
            <AddSemesterButton/>
        </div>
    )
}