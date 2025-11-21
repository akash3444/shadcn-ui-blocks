import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { Checkbox } from "@/registry/ui/checkbox";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { Textarea } from "@/registry/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center py-16">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
      <b className="text-muted-foreground uppercase font-semibold text-sm">
        Contact Us
      </b>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
        Chat with our friendly team!
      </h2>
      <p className="mt-3 text-base sm:text-lg text-muted-foreground">
        We&apos;d love to hear from you. Please fill out this form or shoot us
        an email.
      </p>
      <div className="mt-16 flex flex-col lg:flex-row gap-16 md:gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 *:border *:p-6 *:bg-background gap-1 border p-1 bg-muted max-w-3xl w-full">
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Email</h3>
            <p className="my-2.5 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <Link
              className="font-medium text-primary"
              href="mailto:akashmoradiya3444@gmail.com"
            >
              akashmoradiya3444@gmail.com
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Live chat</h3>
            <p className="my-2.5 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <Link className="font-medium text-primary" href="#">
              Start new chat
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Office</h3>
            <p className="my-2.5 text-muted-foreground">
              Come say hello at our office HQ.
            </p>
            <Link
              className="font-medium text-primary"
              href="https://map.google.com"
              target="_blank"
            >
              100 Smith Street Collingwood <br /> VIC 3066 AU
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl">Phone</h3>
            <p className="my-2.5 text-muted-foreground">
              Mon-Fri from 8am to 5pm.
            </p>
            <Link
              className="font-medium text-primary"
              href="tel:akashmoradiya3444@gmail.com"
            >
              +1 (555) 000-0000
            </Link>
          </div>
        </div>

        {/* Form */}
        <div className="border p-1 bg-muted w-full max-w-lg">
          <Card className="relative isolate bg-white/50 shadow-none lg:ms-auto rounded-none">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                We'd love to hear from you. Please fill out this form.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-2">
              <form>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      placeholder="First name"
                      id="firstName"
                      className="mt-2 bg-white h-10 shadow-none"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      placeholder="Last name"
                      id="lastName"
                      className="mt-2 bg-white h-10 shadow-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      id="email"
                      className="mt-2 bg-white h-10 shadow-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Message"
                      className="mt-2 bg-white shadow-none"
                      rows={6}
                    />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <Checkbox id="acceptTerms" className="bg-background" />
                    <Label htmlFor="acceptTerms" className="gap-0">
                      You agree to our
                      <Link href="#" className="underline ml-1">
                        terms and conditions
                      </Link>
                      <span>.</span>
                    </Label>
                  </div>
                </div>
                <Button className="mt-6 w-full" size="lg">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
