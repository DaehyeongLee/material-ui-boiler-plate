import React, { useEffect, useState } from 'react';
import { FilterBar, FilterTable } from './components';
import FilterExample_Backend from "../../backend/FilterExample_Backend";

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "3% 10% 0 10%"
    }
}))

function FilterExample(props) {

    const classes = useStyles();

    const { history } = props;

    const [searchInfo, setSearchInfo] = useState({});
    const [userList, setuserList] = useState([])

    useEffect(() => {

        const init = async () => {
            await getUsers();
        };
        setTimeout(() => {
            init();
        });

    }, [])

    const getUsers = async (searchInfo) => {
        setuserList(FilterExample_Backend(searchInfo))
    }

    return (
        <div className={classes.root}>
            <FilterBar
                searchInfo={searchInfo}
                setSearchInfo={setSearchInfo}
                getUsers={getUsers}
            />
            <FilterTable
                userList={userList}
            />
        </div>

    )
}

export default FilterExample
