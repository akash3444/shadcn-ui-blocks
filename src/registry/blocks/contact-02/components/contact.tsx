import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => (
  <div className="flex min-h-screen items-center justify-center py-16">
    <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
      <b className="font-semibold text-muted-foreground text-sm uppercase">
        Contact Us
      </b>
      <h2 className="mt-3 font-satoshi font-semibold text-4xl tracking-tight">
        Chat with our friendly team!
      </h2>
      <p className="mt-3 text-lg text-muted-foreground md:text-xl">
        We&apos;d love to hear from you. Please fill out this form or shoot us
        an email.
      </p>
      <div className="mt-16 flex flex-col gap-16 md:gap-10 lg:flex-row">
        <div className="grid w-full max-w-3xl grid-cols-1 gap-1 rounded-xl border bg-muted p-1 *:rounded-lg *:border *:bg-background *:p-6 sm:grid-cols-2 lg:col-span-2 dark:*:border-foreground/20">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:border-foreground/20 dark:bg-foreground/10">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-medium text-xl">Email</h3>
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
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:bg-foreground/10">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-medium text-xl">Live chat</h3>
            <p className="my-2.5 text-muted-foreground">
              Our friendly team is here to help.
            </p>
            <Link className="font-medium text-primary" href="#">
              Start new chat
            </Link>
          </div>
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:bg-foreground/10">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-medium text-xl">Office</h3>
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
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:bg-foreground/10">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-medium text-xl">Phone</h3>
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
        <div className="w-full max-w-lg rounded-xl border bg-muted p-1">
          <Card className="relative isolate rounded-lg bg-background shadow-none lg:ms-auto dark:border-foreground/20">
            <CardHeader className="gap-1">
              <CardTitle className="font-medium text-xl">Contact Us</CardTitle>
              <CardDescription className="text-base">
                We'd love to hear from you. Please fill out this form.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-2">
              <form>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      className="mt-2 h-10 bg-white shadow-none"
                      id="firstName"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      className="mt-2 h-10 bg-white shadow-none"
                      id="lastName"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className="mt-2 h-10 bg-white shadow-none"
                      id="email"
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      className="mt-2 bg-white shadow-none"
                      id="message"
                      placeholder="Message"
                      rows={6}
                    />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <Checkbox className="bg-background" id="acceptTerms" />
                    <Label className="gap-0" htmlFor="acceptTerms">
                      You agree to our
                      <Link className="ml-1 underline" href="#">
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
