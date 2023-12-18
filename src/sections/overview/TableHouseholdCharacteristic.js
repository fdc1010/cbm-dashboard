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
                <TableCell rowSpan={2}>Table A. #</TableCell> 
                <TableCell>Nuclear Families</TableCell>              
                <TableCell>overseas workers</TableCell>     
                <TableCell>Has Pregnant</TableCell>
                <TableCell>Has Solo Parent</TableCell>
                <TableCell>Has Disabled</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tally.map((rec) => {

                return (
                  <TableRow hover key={rec.id}>
                    <TableCell>{tally.findIndex(item=>item.id === rec.id) + 1}</TableCell>
                    <TableCell>{rec.nuclear}</TableCell>              
                    <TableCell>{rec.overseas}</TableCell>     
                    <TableCell>{rec.solo_parent}</TableCell>
                    <TableCell>{rec.pregnant}</TableCell>
                    <TableCell>{rec.disabled}</TableCell>
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
