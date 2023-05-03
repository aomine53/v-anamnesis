import React from "react";
import { Link } from "react-router-dom";
import "../components/Styling.css";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import {
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";


export default function LandingPage() {
  return (
    <React.Fragment>
      <AppBar component="nav" style={{
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 1px 2px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.0), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        height: 65,
      }}>
        <Toolbar>
          <Typography variant="h4" style={{
             color: "#004499",
             fontFamily: "Kaushan Script",
             mt: "3px",
             fontSize: "40px",
          }}>
            V
          </Typography>
          <Typography variant="h4" style={{
             color: "#004499",
             fontFamily: "Kaushan Script",
             mt: "3px",
             fontSize: "40px",
          }}>
            -anamnesis
          </Typography>
          <Box
            sx={{
              // display: { xs: "none", sm: "block" },
              position: "absolute",
              top: 0,
              right: 0,
              mr: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{ mt: 1.5, mb: 2, mr: 2 }}
              style={{
                borderRadius: 15,
                backgroundColor: "#1128bd",
                padding: "8px 16px",
                fontSize: "14px",
                color: "#ffffff",
                marginLeft: "5px",
                marginRight: "5px",
                // marginBottom:"80px",
              }}
              component={Link}
              to="/signup/doctor"
            >
              Doctor's Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 1.5, mb: 2, mr: 2 }}
              style={{
                borderRadius: 15,
                backgroundColor: "#c62624",
                padding: "8px 16px",
                fontSize: "14px",
                color: "#ffffff",
                marginLeft: "5px",
                marginRight: "5px",
                // marginBottom:"80px",
              }}
              component={Link}
              to="/signup/patient"
            >
              Patient's Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 1.5, mb: 2, mr: 2 }}
              style={{
                borderRadius: 15,
                backgroundColor: "#8400be",
                padding: "8px 16px",
                fontSize: "14px",
                color: "#ffffff",
                marginLeft: "5px",
                marginRight: "5px",
                // marginBottom:"80px",
              }}
              component={Link}
              to="/login"
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Grid container>
          <Grid item xs={6}>
            <div>
              <Card
                style={{
                  marginTop: "28%",
                  marginLeft: "14%",
                  boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.25)",
                  borderRadius: 12,
                }}
              >
                <main class="container">
                  <p>Always be</p>
                  <section class="animation">
                    <div class="first">
                      <div>Fit</div>
                    </div>
                    <div class="second">
                      <div>Happy</div>
                    </div>
                    <div class="third">
                      <div>strong</div>
                    </div>
                  </section>
                </main>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    align="center"
                    style={{
                      color: "#d40080",
                      fontFamily: "Lobster",
                      mt: "3px",
                      fontSize: "20px",
                    }}
                  >
                    Healthy life...make it priority.
                  </Typography>
                  <Typography
                    sx={{ marginBottom: "0.5rem" }}

                    variant="body2"
                    color="text.secondary"
                    style={{
                      color: "#022796",
                      fontFamily: "Crimson Text",
                      fontSize: "16px",
                      padding: "30px"
                    }}
                  >
                    Our e-prescription and online consultation website offers a
                    hassle-free and convenient way for patients to access
                    quality healthcare services from the comfort of their own
                    homes.Our goal is to provide accessible and efficient
                    healthcare solutions that improve patient outcomes and
                    overall wellness.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{
              
              padding: "5px",
              float: "right",
              marginTop: "40px",
            }}>
              <Container maxWidth="sm">
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-doctors-nurses-illustration_23-2148903885.jpg?size=626&ext=jpg&ga=GA1.2.916134240.1681288939&semt=ais"
                  alt="medical-related"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                    marginTop: "40px",
                  }}
                />
              </Container>
            </div>
          </Grid>
        </Grid>
        <Container style={{
          paddingTop: "5px",
          paddingBottom: "5px",
        }} maxWidth="md">
          <Grid container spacing={4} style={{
            marginTop:"30px",
            marginBottom:"60px",       }}>
            
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/free-vector/online-doctor-with-white-coat_23-2148519127.jpg?size=626&ext=jpg&ga=GA1.1.916134240.1681288939&semt=ais"
                    alt="green iguana"
                  />
                  <CardContent style={{
                    color: "#000",
                    background:"#fff",
                    fontFamily: "Kaushan Script",
                    mt: "3px",
                    fontSize: "40px",
                  }}>
                    <Typography gutterBottom variant="h6" component="div">
                      Consult Doctor Online
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Get expert medical advice from the comfort of your own
                      home with our online doctor consultancy service.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/free-vector/pharmacist-signing-drug-prescription-flat-vector-illustration_74855-4810.jpg?size=626&ext=jpg&ga=GA1.2.916134240.1681288939&semt=ais"
                    alt="green iguana"
                  />
                  <CardContent style={{
                    color: "#000",
                    background:"#fff",
                    fontFamily: "Kaushan Script",
                    mt: "3px",
                    fontSize: "40px",
                  }}>
                    <Typography gutterBottom variant="h6" component="div">
                      E-Prescription
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Say goodbye to paper prescriptions and simplify your
                      healthcare experience with e-prescriptions.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/premium-vector/doctor-surgeon-pharmacist-therapist-with-stethoscope-smiling-medic-worker-medical-staff_458444-338.jpg?size=626&ext=jpg&ga=GA1.2.916134240.1681288939&semt=ais"
                    alt="green iguana"
                  />
                  <CardContent style={{
                    color: "#000",
                    background:"#fff",
                    fontFamily: "Kaushan Script",
                    mt: "3px",
                    fontSize: "40px",
                  }}>
                    <Typography gutterBottom variant="h6" component="div">
                      Find Doctor Near You
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Easily find and connect with top-rated doctors near you
                      for personalized healthcare solutions.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/free-vector/isometric-gastroenterology-composition-with-view-medication-with-tubes-pills-illustration_1284-63536.jpg?size=626&ext=jpg&ga=GA1.1.916134240.1681288939&semt=ais"
                    alt="green iguana"
                  />
                  <CardContent style={{
                    color: "#000",
                    background:"#fff",
                    fontFamily: "Kaushan Script",
                    mt: "3px",
                    fontSize: "40px",
                  }}>
                    <Typography gutterBottom variant="h6" component="div">
                      Medicines
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Get access to a wide range of medicines with ease, with
                      our hassle-free and convenient services.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/free-vector/organic-flat-fruit-collection_23-2148935309.jpg?size=626&ext=jpg&ga=GA1.1.916134240.1681288939&semt=ais"
                    alt="green iguana"
                  />
                  <CardContent style={{
                    color: "#000",
                    background:"#fff",
                    fontFamily: "Kaushan Script",
                    mt: "3px",
                    fontSize: "40px",
                  }}>
                    <Typography gutterBottom variant="h6" component="div">
                      Eating Right
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Transform your health and strengthen your immune system
                      with the power of nutritious, wholesome foods and fruits.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image="https://img.freepik.com/premium-vector/blood-pressure-test-concept-illustration_288067-466.jpg?size=626&ext=jpg&ga=GA1.2.916134240.1681288939&semt=ais"
                    alt="green iguana"
                  />
                  <CardContent style={{
                    color: "#000",
                    background:"#fff",
                    fontFamily: "Kaushan Script",
                    mt: "3px",
                    fontSize: "40px",
                  }}>
                    <Typography gutterBottom variant="h6" component="div">
                      Regular Health Check Ups
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Maintain good health and prevent heatlh problems before
                      they arise with regular health check-ups.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer style={{
         backgroundColor: "#eeee",
         padding: "2px",
         boxShadow:
           "0px 1px 2px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.0), 0px 1px 10px 0px rgba(0,0,0,0.12)",
         height: 50,
      }}>
        <Typography variant="subtitle1" align="center">
          Copyright © {new Date().getFullYear()}, V-anamnesis. All rights
          reserved.
        </Typography>
      </footer>
    </React.Fragment>
  );
}
