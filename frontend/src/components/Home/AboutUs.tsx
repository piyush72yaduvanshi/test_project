import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "../ui/card"; // If you're not using the '@' symbol.
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import { Badge } from "../ui/badge";
import { Linkedin, Twitter, Quote } from "lucide-react";
import { Navbar } from "../Home/HeroSection";
import { Link } from "react-router-dom";
import praveen from "../../assets/praveen.jpg";
import ritik from "../../assets/ritik.jpg";
import piyush from "../../assets/piyush.jpg";
import aniket from "../../assets/aniket.jpg";

// import FeedbackForm from "./Feedback";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Navbar />
      {/* Company Introduction */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to transform technnolofgfy that anyone can create
          the website without writing any code just to write the simple prompt.
          This mission is soon completed by our team.
        </p>
      </section>

      {/* Leadership Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Founder Card */}
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src={piyush}
                alt="Founder"
                className=" w-full h-full rounded-sm"
                height="100%"
                width="100%"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Piyush Yadav</CardTitle>
                  <CardDescription>Founder & CEO</CardDescription>
                </div>
                <Avatar className="h-12 w-12 border-2 border-background -mt-16 relative z-10">
                  <AvatarImage src={piyush} alt="Sarah Johnson" />
                  <AvatarFallback>SY</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I have been working from the past few years in the field ffof
                technology and I have a great experience in the field of
                technology.
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Linkedin className="h-3 w-3" />
                  <Link to="https://www.linkedin.com/in/piyush-yadav-203977298/">
                    LinkedIn
                  </Link>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Twitter className="h-3 w-3" />

                  <Link to="#">X</Link>
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src={ritik}
                alt="Founder"
                className=" w-full h-full rounded-sm"
                height="100%"
                width="100%"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Ritik Singh</CardTitle>
                  <CardDescription>Founder & CEO</CardDescription>
                </div>
                <Avatar className="h-12 w-12 border-2 border-background -mt-16 relative z-10">
                  <AvatarImage src={ritik} alt="Sarah Johnson" />
                  <AvatarFallback>SY</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I have been working from the past few years in the field ffof
                technology and I have a great experience in the field of
                technology.
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Linkedin className="h-3 w-3" />
                  <Link to="https://www.linkedin.com/in/ritik-singh-7b4b1823b/">
                    LinkedIn
                  </Link>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Twitter className="h-3 w-3" />

                  <Link to="#">X</Link>
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src={aniket}
                alt="Founder"
                className=" w-full h-full rounded-sm"
                height="100%"
                width="100%"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Aniket Yadav</CardTitle>
                  <CardDescription>Founder & CEO</CardDescription>
                </div>
                <Avatar className="h-12 w-12 border-2 border-background -mt-16 relative z-10">
                  <AvatarImage src={aniket} alt="Sarah Johnson" />
                  <AvatarFallback>SY</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I have been working from the past few years in the field ffof
                technology and I have a great experience in the field of
                technology.
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Linkedin className="h-3 w-3" />
                  <Link to="https://www.linkedin.com/in/aniket-yadav-35b5522b1/">
                    LinkedIn
                  </Link>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Twitter className="h-3 w-3" />

                  <Link to="#">X</Link>
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src={praveen}
                alt="Founder"
                className=" w-full h-full rounded-sm"
                height="100%"
                width="100%"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Praveen Yadav</CardTitle>
                  <CardDescription>Founder & CEO</CardDescription>
                </div>
                <Avatar className="h-12 w-12 border-2 border-background -mt-16 relative z-10">
                  <AvatarImage src={praveen} alt="Sarah Johnson" />
                  <AvatarFallback>SY</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I have been working from the past few years in the field ffof
                technology and I have a great experience in the field of
                technology.
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Linkedin className="h-3 w-3" />
                  <Link to="https://www.linkedin.com/in/praveen-dubey-05b34a288/">
                    LinkedIn
                  </Link>
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Twitter className="h-3 w-3" />

                  <Link to="#">X</Link>
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-muted rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Jessica Davis", "Robert Brown", "Amanda Lee"].map(
              (name, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <Quote className="h-8 w-8 text-primary opacity-80" />
                  </CardHeader>
                  <CardContent>
                    <p className="italic mb-6">
                      "This is an amazing company! The results they deliver are
                      outstanding."
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="Client" />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-sm text-muted-foreground">
                          CEO, Innovate Inc.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* <FeedbackForm /> */}
    </div>
  );
}
