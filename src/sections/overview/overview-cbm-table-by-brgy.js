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
import { Stack } from "@mui/system";

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
                <TableCell align="center" rowSpan={2}>Brgy</TableCell> 
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={4} align="center">Household</TableCell>
                  </TableRow>   
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Bedrooms</TableCell>
                    <TableCell>
                      <TableRow>
                        <TableCell style={{ padding: 0 }} colSpan={2} align="center">Materials</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Roof</TableCell>
                        <TableCell>OuterWall</TableCell>
                      </TableRow>
                    </TableCell>  
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={4} align="center">Characteristics</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nuclear Families</TableCell>
                    <TableRow>
                      <TableCell style={{ padding: 0 }} colSpan={3} align="center">Household Members</TableCell>
                    </TableRow> 
                    <TableRow>                      
                      <TableCell>overseas workers</TableCell>
                      <TableCell>pregnant</TableCell>
                      <TableCell>disabled</TableCell>
                    </TableRow> 
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Demography</TableCell>
                  </TableRow> 
                  <TableRow>                      
                    <TableCell>Relation to head household</TableCell>
                    <TableCell>Marital status</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Literacy</TableCell>
                  </TableRow> 
                  <TableRow>                      
                    <TableCell>Grade level Highest educational attainment</TableCell>
                    <TableCell>Reason for not attending school</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Political Participation</TableCell>
                  </TableRow> 
                  <TableRow>                      
                    <TableCell>Registered voter</TableCell>
                    <TableCell>Vote in the last election</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell>Economic Activity</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Did work for atleast one hour during the past week</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell>Did not work, did have a job or business during the past week</TableCell>
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
                    <TableCell><TableRow><TableCell></TableCell></TableRow><TableRow><TableCell></TableCell></TableRow></TableCell>
                    <TableCell>{rec.characteristics}</TableCell>
                    <TableCell>{rec.demography}</TableCell>
                    <TableCell>{rec.literacy}</TableCell>
                    <TableCell>{rec.political}</TableCell>
                    <TableCell>{rec.economic}</TableCell>
                    <TableCell></TableCell>
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
