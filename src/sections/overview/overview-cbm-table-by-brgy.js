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
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";

const statusMap = {
  inprogress: "warning",
  completed: "success",
  flunk: "error",
};

export const OverviewCbmTableByBrgy = (props) => {
  const { tally = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="By Barangay" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Brgy</TableCell>
                <TableCell>Household</TableCell>
                <TableCell>Characteristics</TableCell>
                <TableCell>Demography</TableCell>
                <TableCell>Literacy</TableCell>
                <TableCell>Political Participation</TableCell>
                <TableCell>Economic Activity</TableCell>
                <TableCell sortDirection="desc">Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tally.map((rec) => {
                const createdAt = format(rec.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow hover key={rec.id}>
                    <TableCell>{rec.ref}</TableCell>
                    <TableCell>{rec.customer.name}</TableCell>
                    <TableCell>{rec.characteristics}</TableCell>
                    <TableCell>{rec.demography}</TableCell>
                    <TableCell>{rec.literacy}</TableCell>
                    <TableCell>{rec.political}</TableCell>
                    <TableCell>{rec.economic}</TableCell>
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

OverviewCbmTableByBrgy.prototype = {
  tally: PropTypes.array,
  sx: PropTypes.object,
};
