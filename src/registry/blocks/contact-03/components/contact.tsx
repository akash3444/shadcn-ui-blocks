import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => (
  <div className="flex min-h-screen items-center justify-center pt-12 pb-16 md:pt-16">
    <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">
      <b className="font-semibold text-muted-foreground text-sm uppercase">
        Contact Us
      </b>
      <h2 className="mt-3 font-semibold text-3xl tracking-tighter md:text-4xl">
        We&apos;d love to hear from you
      </h2>
      <p className="mt-4 text-base text-muted-foreground sm:text-lg">
        Our friendly team is always here to chat.
      </p>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="rounded-xl border border-dashed bg-muted/40 p-6 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-foreground/8">
            <MailIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Email</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link
            className="font-medium"
            href="mailto:akashmoradiya3444@gmail.com"
          >
            akashmoradiya3444@gmail.com
          </Link>
        </div>
        <div className="rounded-xl border border-dashed bg-muted/40 p-6 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-foreground/8">
            <MessageCircle />
          </div>
          <h3 className="mt-8 font-bold text-xl">Live chat</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link className="font-medium" href="#">
            Start new chat
          </Link>
        </div>
        <div className="rounded-xl border border-dashed bg-muted/40 p-6 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-foreground/8">
            <MapPinIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Office</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Come say hello at our office HQ.
          </p>
          <Link
            className="font-medium"
            href="https://map.google.com"
            target="_blank"
          >
            100 Smith Street Collingwood <br /> VIC 3066 AU
          </Link>
        </div>
        <div className="rounded-xl border border-dashed bg-muted/40 p-6 pb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-foreground dark:bg-foreground/8">
            <PhoneIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Phone</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Mon-Fri from 8am to 5pm.
          </p>
          <Link className="font-medium" href="tel:akashmoradiya3444@gmail.com">
            +1 (555) 000-0000
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
