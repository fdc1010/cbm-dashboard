import { format } from "date-fns";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";

const statusMap = {
  inprogress: "warning",
  completed: "success",
  flunk: "error",
};

export const TableHouseholdCharacteristic = (props) => {
  const { tally = [], sx } = props;
  return (
    <Card sx={sx}>
      <CardHeader title="C. Household Characteristics" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell rowSpan={2}>Seq. # from Table A</TableCell> 
                <TableCell style={{ padding: 0 }}>
                  <TableRow>
                    <TableCell>Nuclear Families</TableCell>              
                    <TableCell>overseas workers</TableCell>     
                    <TableCell>Has Pregnant</TableCell>
                    <TableCell>Has Solo Parent</TableCell>
                    <TableCell>Has Disabled</TableCell>
                  </TableRow>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tally.map((rec) => {
                const createdAt = format(rec.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow hover key={rec.id}>
                    <TableCell>{tally.findIndex(item=>item.id === rec.id) + 1}</TableCell>
                    <TableCell>
                      <TableRow>
                        <TableCell></TableCell>              
                        <TableCell></TableCell>     
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

TableHouseholdCharacteristic.prototype = {
  tally: PropTypes.array,
  sx: PropTypes.object,
};
