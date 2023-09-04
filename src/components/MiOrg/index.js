import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{

    return <section className="orgSection">
        <h className="title">Mi organización</h>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg