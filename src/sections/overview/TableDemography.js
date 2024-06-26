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
                <TableCell rowSpan={2}>Table A. #</TableCell>                 
                <TableCell>&gt; 10 Members</TableCell>
                <TableCell>Relation to head of the household</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Registered Birth</TableCell>
                <TableCell>Marital status</TableCell>
                <TableCell>Ethnicity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tally.map((rec) => {
                return (
                  <TableRow hover key={rec.id}>
                    <TableCell>{tally.findIndex(item=>item.id === rec.id)+1}</TableCell>                
                    <TableCell>{rec.gt_ten_members}</TableCell>
                    <TableCell>{rec.relation}</TableCell>
                    <TableCell>{rec.gender}</TableCell>
                    <TableCell>{rec.reg_birth}</TableCell>
                    <TableCell>{rec.marital}</TableCell>
                    <TableCell>{rec.ethnicity}</TableCell>
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
