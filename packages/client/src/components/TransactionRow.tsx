import { StyledIconsList, StyledInput } from "@/components/styled";
import {
    StyledTableRow,
    StyledTableRowItem,
} from "@/components/styled/StyledTable";
import { useTransactionRow } from "@/hooks/transactions/useTransactionRow";
import { ITransaction } from "@/interface";
import { BiCog } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import {
    StyledUpdateTransaction,
    UpdateTransaction,
} from "./UpdateTransaction";
import styled from "styled-components";

interface Props {
    data: ITransaction;
}

export const StyledTransactionRow = styled(StyledTableRow)`
    position: relative;
    ${StyledUpdateTransaction} {
        position: absolute;
    }
`;

export function TransactionRow({ data }: Props) {
    const { isOpen, fromAccount, toAccount,close, open, remove } =
        useTransactionRow(data);

    

    return (
        <>
            {isOpen && <UpdateTransaction transaction={data} onClose={close} />}
            <StyledTransactionRow>
                <StyledTableRowItem>
                    <StyledInput
                        value={new Date(data.date).toISOString().slice(0, 10)}
                        type="date"
                        disabled
                    />
                </StyledTableRowItem>
                <StyledTableRowItem>R$ {data.amount}</StyledTableRowItem>
                <StyledTableRowItem>{data.description}</StyledTableRowItem>
                <StyledTableRowItem>{fromAccount?.name}</StyledTableRowItem>
                <StyledTableRowItem>{toAccount?.name}</StyledTableRowItem>
                <StyledTableRowItem>
                    <StyledIconsList>
                        <button onClick={remove}>
                            <FiTrash2 />
                        </button>
                        <button onClick={open}>
                            <BiCog />
                        </button>
                    </StyledIconsList>
                </StyledTableRowItem>
            </StyledTransactionRow>
        </>
    );
}