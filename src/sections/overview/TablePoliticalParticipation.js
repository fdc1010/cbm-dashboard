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

export const TablePoliticalParticipation = (props) => {
  const { tally = [], sx } = props;
  return (
    <Card sx={sx}>
      <CardHeader title="F. Political Participation" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell rowSpan={2}>Table A. #</TableCell> 
                <TableCell style={{ padding: 0 }}>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Political Participation</TableCell>
                  </TableRow> 
                  <TableRow>                      
                    <TableCell>Registered voter</TableCell>
                    <TableCell>Vote in the last election</TableCell>
                  </TableRow>
                </TableCell>          
              </TableRow>
            </TableHead>
            <TableBody>
              {tally.map((rec) => {

                return (
                  <TableRow hover key={rec.id}>
                    <TableCell>{tally.findIndex(item=>item.id === rec.id) + 1}</TableCell>
                    <TableCell></TableCell>
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

TablePoliticalParticipation.prototype = {
  tally: PropTypes.array,
  sx: PropTypes.object,
};
