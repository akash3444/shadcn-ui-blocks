"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BanIcon, MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs";

const followers = [
  { username: "jane_doe", fullName: "Jane Doe" },
  { username: "tech_guru", fullName: "Alex Thompson" },
  { username: "nature_lover", fullName: "Emma Green" },
  { username: "photogirl", fullName: "Sophia Martinez" },
  { username: "code_master", fullName: "Liam Patel" },
];

const following = [
  { username: "startup_guy", fullName: "James Lee" },
  { username: "design_dreamer", fullName: "Mia Wilson" },
  { username: "art_addict", fullName: "Benjamin White" },
  { username: "web_wizard", fullName: "Lucas Nguyen" },
  { username: "health_nut", fullName: "Ella Singh" },
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const UserList = ({ users }: { users: typeof following }) => (
  <AnimatePresence>
    <motion.div
      animate="visible"
      className="space-y-4"
      exit="hidden"
      initial="hidden"
      variants={listVariants}
    >
      {users.map(({ username, fullName }) => (
        <motion.div
          className="flex items-center justify-between gap-2"
          key={username}
          transition={{ type: "tween" }}
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-secondary" />
            <div>
              <span className="block font-semibold text-sm leading-none">
                {fullName}
              </span>
              <span className="text-xs leading-none">@{username}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline">
              <MoreHorizontalIcon className="h-5 w-5" />
            </Button>
            <Button className="text-destructive" size="icon" variant="outline">
              <BanIcon className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </AnimatePresence>
);

export default function AnimatedTabsDemo() {
  return (
    <Tabs className="w-full max-w-xs" defaultValue="followers">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="followers">Followers</TabsTrigger>
        <TabsTrigger value="following">Following</TabsTrigger>
      </TabsList>

      <div className="mt-2 rounded-md border p-4">
        <TabsContent value="followers">
          <UserList users={followers} />
        </TabsContent>
        <TabsContent value="following">
          <UserList users={following} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
