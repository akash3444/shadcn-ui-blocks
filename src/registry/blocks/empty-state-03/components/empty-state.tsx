import {
  BadgeDollarSign,
  CreditCard,
  ImportIcon,
  PlusIcon,
  Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function EmptyState() {
  return (
    <div className="px-6 py-10">
      <div className="mx-auto max-w-lg">
        <Tabs defaultValue="invoices">
          <TabsList
            className={cn(
              "mb-3 bg-transparent p-0",
              "*:px-3 *:text-muted-foreground *:data-[state=active]:bg-muted *:data-[state=active]:text-foreground *:data-[state=active]:shadow-none"
            )}
          >
            <TabsTrigger value="invoices">
              <Receipt /> Invoices
            </TabsTrigger>
            <TabsTrigger value="payments">
              <BadgeDollarSign /> Payments
            </TabsTrigger>
            <TabsTrigger value="subscriptions">
              <CreditCard /> Subscriptions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="invoices">
            <Empty className="rounded-xl border bg-muted/30 py-12">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Receipt />
                </EmptyMedia>
                <EmptyTitle>No Invoices Yet</EmptyTitle>
                <EmptyDescription>
                  You haven&apos;t created any invoices yet. Get started by
                  creating your first invoice.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <div className="flex flex-wrap gap-2 *:mx-auto">
                  <Button>
                    <PlusIcon /> Create Invoice
                  </Button>
                  <Button variant="outline">
                    <ImportIcon /> Import Invoice
                  </Button>
                </div>
              </EmptyContent>
            </Empty>
          </TabsContent>

          <TabsContent value="payments">
            <Empty className="rounded-xl border bg-muted/30 py-12">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <BadgeDollarSign />
                </EmptyMedia>
                <EmptyTitle>No Payments Yet</EmptyTitle>
                <EmptyDescription>
                  You haven&apos;t received any payments yet. Payments will
                  appear here once your invoices are paid.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <div className="flex flex-wrap gap-2 *:mx-auto">
                  <Button>
                    <PlusIcon /> Record Payment
                  </Button>
                </div>
              </EmptyContent>
            </Empty>
          </TabsContent>

          <TabsContent value="subscriptions">
            <Empty className="rounded-xl border bg-muted/30 py-12">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <CreditCard />
                </EmptyMedia>
                <EmptyTitle>No Subscriptions Yet</EmptyTitle>
                <EmptyDescription>
                  You don&apos;t have any active subscriptions. Create recurring
                  billing plans for your customers.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <div className="flex flex-wrap gap-2 *:mx-auto">
                  <Button>
                    <PlusIcon /> Create Subscription
                  </Button>
                </div>
              </EmptyContent>
            </Empty>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
