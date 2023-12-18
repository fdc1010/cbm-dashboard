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

export const OverviewCbmTableByBrgy = (props) => {
  const { tally = [], sx } = props;
  return (
    <Card sx={sx}>
      <CardHeader title="Surveys" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" rowSpan={2}>#</TableCell> 
                <TableCell align="center" rowSpan={2}>Brgy</TableCell> 
                <TableCell style={{ padding: 0 }}>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={4} align="center">Housing Characteristics</TableCell>
                  </TableRow>   
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Bedrooms</TableCell>
                    <TableCell>
                      <TableRow>
                        <TableCell>Roof</TableCell>
                        <TableCell>OuterWall</TableCell>
                      </TableRow>
                    </TableCell>  
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={5} align="center">Household Characteristics</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nuclear Families</TableCell>              
                    <TableCell>overseas workers</TableCell>     
                    <TableCell>Has Pregnant</TableCell>
                    <TableCell>Has Solo Parent</TableCell>
                    <TableCell>Has Disabled</TableCell>
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
                    <TableCell>Grade Level</TableCell>
                    <TableCell>Reason for not attending</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Political</TableCell>
                  </TableRow> 
                  <TableRow>                      
                    <TableCell>Registered voter</TableCell>
                    <TableCell>Vote in the last election</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Economic</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Worked for an hr the past week</TableCell>
                    <TableCell>Didn't work the past week</TableCell>
                  </TableRow>
                </TableCell>
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Health</TableCell>
                  </TableRow>
                </TableCell>         
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Crime</TableCell>
                  </TableRow>  
                </TableCell>         
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Nutrition</TableCell>
                  </TableRow>  
                </TableCell>          
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Sanitation</TableCell>
                  </TableRow>  
                </TableCell>           
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Housing</TableCell>
                  </TableRow>  
                </TableCell>           
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Waste Management</TableCell>
                  </TableRow>  
                </TableCell>           
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Income</TableCell>
                  </TableRow>  
                </TableCell>           
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Entrepreneurial</TableCell>
                  </TableRow>  
                </TableCell>          
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Agricultural</TableCell>
                  </TableRow>  
                </TableCell>      
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Livestock</TableCell>
                  </TableRow>   
                </TableCell>      
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Fishing</TableCell>
                  </TableRow>  
                </TableCell>       
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Climate</TableCell>
                  </TableRow>   
                </TableCell>     
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Hunger</TableCell>
                  </TableRow>   
                </TableCell>  
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Deceased</TableCell>
                  </TableRow>  
                </TableCell>  
                <TableCell>
                  <TableRow>
                    <TableCell style={{ padding: 0 }} colSpan={2} align="center">Programs</TableCell>
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
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
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
