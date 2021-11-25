import React, { useState } from 'react';
import {
    Accordion, AccordionSummary, AccordionDetails,
    Typography, Grid, FormControl, Input, FormLabel,
    Button, ButtonGroup, colors
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    expansionPanelSummary: {
        backgroundColor: colors.blue[400]
    },
    expansionPanelDetails: {
        padding: "30px"
    },
    heading: {
        fontSize: "1.5rem",
        color: "white",
        padding: "2px 5px",
        flexBasis: "15%"
    },
    secondaryHeading: {
        fontSize: "1.1rem",
        color: "white",
        padding: "2px 5px"
    }
}))

function FilterBar(props) {

    const classes = useStyles();

    const { searchInfo, setSearchInfo, getUsers } = props;

    const dataBinding = async (searchInfo) => {
        setSearchInfo(prev => {
            return {
                ...prev,
                name: searchInfo ? searchInfo.name : "",
                order: searchInfo ? searchInfo.order : "",
                phone: searchInfo ? searchInfo.phone : "",
                address: searchInfo ? searchInfo.address : ""
            }
        })

        getUsers({
            name: searchInfo ? searchInfo.name : "",
            order: searchInfo ? searchInfo.order : "",
            phone: searchInfo ? searchInfo.phone : "",
            address: searchInfo ? searchInfo.address : ""
        })
    }

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setSearchInfo(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getUsers(searchInfo);

    }

    const renderInput = (label, key, value) => (
        <Grid item xs={12} md={6}>
            <FormControl fullWidth>
                <FormLabel htmlFor={key} component="legend">{label}</FormLabel>
                <Input
                    id={key}
                    name={key}
                    value={value || ""}
                    onChange={(event) => handleChange(event)}
                />
            </FormControl>
        </Grid>
    )

    return (

        <Accordion square>

            <AccordionSummary
                className={classes.expansionPanelSummary}
                expandIcon={<ExpandMoreIcon style={{ color: "#dcdcdc" }} />}
                aria-controls="panel-content"
                id="panel-header"
            >
                <Grid container alignItems={"center"}>
                    <Typography className={classes.heading}>
                        검색필터
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        검색 하려면 여기를 클릭해주세요.
                    </Typography>
                </Grid>
            </AccordionSummary>

            <AccordionDetails
                className={classes.expansionPanelDetails}
            >
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <Grid
                        container
                        spacing={3}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        {renderInput("이름", "name", searchInfo.name)}
                        {renderInput("나이", "order", searchInfo.order)}
                        {renderInput("전화번호", "phone", searchInfo.phone)}
                        {renderInput("주소", "address", searchInfo.address)}

                    </Grid>

                    <Grid container alignItems={"center"} justifyContent={"center"} style={{ padding: "50px 0px 0px 5px" }}>
                        <ButtonGroup>
                            <Button
                                style={{
                                    color: colors.blue[400],
                                    borderColor: colors.blue[400]
                                }}
                                onClick={() => dataBinding(undefined)}
                            >
                                초기화
                            </Button>
                            <Button
                                style={{
                                    color: colors.blue[400],
                                    borderColor: colors.blue[400]
                                }}
                                type={"submit"}
                            >
                                검색
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </form>
            </AccordionDetails>

        </Accordion>
    )
}

export default FilterBar
