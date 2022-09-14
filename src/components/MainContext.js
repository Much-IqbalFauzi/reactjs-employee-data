import { useState, useEffect,useCallback } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faGrip, faAnglesRight, faAnglesLeft, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'; 
import usePageList from "../hook/usePageList"
import Results from "./Results"

const MainContext = () => {
    // const [grid, setGrid] = useState(true)
    const [pagination, setPagination] = useState(1)
    const [inputPage, setInputPage] = useState(pagination)
    const [employee, metaData] = usePageList(pagination)
    const upOne = () => {
        setPagination(prev => prev - 1)
        console.log(pagination)
    }

    const downOne = () => {
        setPagination(prev => prev + 1)
    }

    const toOne = () => {
        setPagination(1)
    }

    const toLast = () => {
        console.log("last")
    }

    const handleChange = ev => {
        let number = ev.target.value.replace(/[^0-9]/g,"")
        if (Number(number) > Number(metaData.pages)) {
            number = metaData.pages
        }
        setPagination(number)
    }

    // const handleEnter = ev => {
    //     if (ev.key === "Enter") {
    //         if (page === "") {
    //             setPage(1)
    //         }
    //         pagination(page)
    //     }
    // }

    return (
        <div>
            <div className="menu-action">
                <div className="paginations">
                    <button
                        onClick={toOne} 
                        disabled={pagination==1? true: false}>
                            <FontAwesomeIcon icon={faAnglesLeft}/></button>
                    <button
                        onClick={upOne}
                        disabled={pagination==1? true: false}>
                            <FontAwesomeIcon icon={faAngleLeft}/></button>
                    {/* <input 
                        className="input-field"
                        pattern="^-?[0-9]\d*\.?\d*$"
                        type="text"
                        value={inputPage}
                        onChange={handleChange}
                        // onKeyDown={handleEnter}
                        style={{
                            width: '28px',
                            textAlign: 'center'
                        }}/> */}
                        <span> {pagination}</span>
                        <span> of {metaData.pages} </span>
                    <button
                        onClick={downOne}>
                        <FontAwesomeIcon icon={faAngleRight}/></button>
                    <button
                        onClick={toLast}>
                        <FontAwesomeIcon icon={faAnglesRight}/></button>
                </div>
                {/* <Pagination
                    upOne={upOne}
                    currentPage={pagination}
                    pagination={setPage} 
                    maksPage={metaData.pages}/> */}
                {/* <div className="toggle-button-view">
                    <FontAwesomeIcon icon={faGrip}/>
                    <FontAwesomeIcon icon={faList}/>
                </div> */}
            </div>
            <Results employee={employee}/>
        </div>
    )
}

export default MainContext