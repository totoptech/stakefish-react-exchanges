import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StyledTable = styled.table`
    border-collapse: collapse;

    td,
    th {
        padding: 12px 24px;
        border-top: 1px solid #dee2e6;
        text-align: right;
    }

    th:nth-child(2) {
        text-align: left;
    }

    tr:hover {
        background-color: rgb(248, 250, 253);
    }

    tr {
        td:nth-child(2) {
            text-align: left;
        }
    }
    tr:last-child {
        td {
            border-bottom: 1px solid #dee2e6;
        }
    }

    thead > tr {
        background-color: rgb(248, 250, 253);
        text-transform: capitalize;
    }
`;
const NameCell = styled(Link)`
    display: flex;
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    color: #000;

    img {
        margin-right: 8px;
    }
`;

const titles = ["country", "url", "trust_score_rank"];

export default function Table({ data }) {
    const getFormattedTitle = (title) => {
        return title === "trust_score_rank" ? "Exchange score" : title;
    };

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    {titles.map((title, index) => (
                        <th key={index}>{getFormattedTitle(title)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <NameCell to={`/exchanges/${item["id"]}`}>
                                <img
                                    src={item["image"]}
                                    alt={item["image"]}
                                    width={24}
                                    height={24}
                                />
                                <p>{item["name"]}</p>
                            </NameCell>
                        </td>
                        {titles.map((title, index) => (
                            <td key={index}>{item[title]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
}

Table.propTypes = {
    data: PropTypes.array
};
