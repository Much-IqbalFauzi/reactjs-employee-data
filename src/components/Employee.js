import "./Employee.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import Female from "../assets/female.svg"
import Male from "../assets/male.svg"

const Employee = ({id, name, email, gender, status}) => {
    let emailName = email.split("@")
    return (
        <div className="employee-card">
            <div className="employee-header">
                <div id="employee-status">
                    {
                        status==="active" ? (
                            <FontAwesomeIcon icon={faSquareCheck} />
                        ) : (
                            <FontAwesomeIcon icon={faSquare} />
                        )
                    }
                    <span> {status}</span>
                </div>
                <span>{id}</span>
            </div>
            <div id="employee-gender">
                {
                    gender==="male" ? (
                        <img src={Male} alt="male" />
                    ) : (
                        <img src={Female} alt="female" />
                    )
                }
            </div>
            <div className="employee-info">
                <span><b>{name}</b></span>
                <span className="email">email:</span>
                <span className="email">{emailName[0]}</span>
                <span className="email">@{emailName[1]}</span>
            </div>
        </div>
    )
}

export default Employee