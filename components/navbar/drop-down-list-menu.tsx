import { AlignLeft } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./user-icon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLinks from "./sign-out-links";
import { SignedIn, SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";

const DropDownListMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <AlignLeft />
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* Now! Logout */}
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button>Login</button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button>Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>

          {/* Now! Login */}
          <SignedIn>
            {links.map((items, index) => {
              return (
                <DropdownMenuItem key={index}>
                  <Link href={items.href}>{items.label}</Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuItem>
              <SignOutLinks />
            </DropdownMenuItem>
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default DropDownListMenu;
