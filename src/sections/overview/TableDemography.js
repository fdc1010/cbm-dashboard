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

export const TableDemography = (props) => {
  const { tally = [], sx } = props;
  return (
    <Card sx={sx}>
      <CardHeader title="D. Demography" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" rowSpan={2}>#</TableCell> 
                <TableCell align="center" rowSpan={2}>Brgy</TableCell> 
                <TableCell style={{ padding: 0 }}>
                  <TableRow>                      
                    <TableCell>Relation to head of the household</TableCell>
                    <TableCell>Marital status</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell sortDirection="desc" style={{ padding: 0 }} colSpan={2} align="center">Date</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Status</TableCell>
                  </TableRow>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tally.map((rec,i) => {
                const createdAt = format(rec.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow hover key={rec.id}>
                    <TableCell>{i+1}</TableCell>
                    <TableCell>{rec.ref}</TableCell>
                    <TableCell>
                      <TableRow>                      
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableCell>
                    <TableCell>{createdAt}</TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[rec.status]}>{rec.status}</SeverityPill>
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

TableDemography.prototype = {
  tally: PropTypes.array,
  sx: PropTypes.object,
};
