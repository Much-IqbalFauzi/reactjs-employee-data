import "./Results.css"
import Employee from "./Employee"

const Results = ({employee}) => {
    return (
        <div className="data-container">
            {!employee.length ? (
                <div>Loading..</div>
            ) : (
                employee.map(item => {
                    return (
                        <Employee 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            email={item.email}
                            gender={item.gender}
                            status={item.status}
                        />
                    )
                })
            )}
        </div>
    )
}

export default Results