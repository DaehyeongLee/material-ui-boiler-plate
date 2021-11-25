import React from 'react';

import {
    Table, TableRow, TableBody, TableCell, TableHead, Card, CardContent
} from '@material-ui/core';

function FilterTable(props) {

    const { userList } = props;

    const tableRow = (obj, index) => (

        <TableRow
            hover
            key={obj.id}>

            {/* name */}
            <TableCell align={"center"}>
                {obj.name}
            </TableCell>
            {/* order */}
            <TableCell align={"center"}>
                {obj.order}
            </TableCell>
            {/* phone */}
            <TableCell align={"center"}>
                {obj.phone}
            </TableCell>
            {/* address */}
            <TableCell align={"center"}>
                {obj.address}
            </TableCell>
        </TableRow>

    )

    return (
        <Card >
            <CardContent>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align={"center"}>이름</TableCell>
                            <TableCell align={"center"}>나이</TableCell>
                            <TableCell align={"center"}>전화번호</TableCell>
                            <TableCell align={"center"}>주소</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            userList.length === 0 ?
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        조회된 데이터가 한 건도 없네요.
                                    </TableCell>
                                </TableRow>
                                :
                                userList.map((item, index) => tableRow(item, index))
                        }
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default FilterTable