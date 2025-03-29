import type React from "react"
import {
  BarChart,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Filter,
  Home,
  Plus,
  Search,
  Settings,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="hidden w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 md:flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">FinanceTrack</h1>
        </div>
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-primary"
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <FileText className="mr-3 h-5 w-5" />
              Invoices
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <CreditCard className="mr-3 h-5 w-5" />
              Expenses
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <Users className="mr-3 h-5 w-5" />
              Clients
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <BarChart className="mr-3 h-5 w-5" />
              Reports
            </Link>
          </div>
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Settings</h3>
            <div className="mt-1 space-y-1">
              <Link
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <Settings className="mr-3 h-5 w-5" />
                Account Settings
              </Link>
            </div>
          </div>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-6">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="w-full flex-1 md:grow-0 md:w-72">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-gray-100 dark:bg-gray-800 pl-8 rounded-md border-none"
                />
              </div>
            </form>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline" size="icon">
              <Calendar className="h-5 w-5" />
              <span className="sr-only">Calendar</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-gray-500 dark:text-gray-400">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="hidden md:flex">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Invoice
                </Button>
              </div>
            </div>

            {/* Overview Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-green-500 flex items-center">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
                  <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,234.00</div>
                  <p className="text-xs text-red-500 flex items-center">+4.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Invoices</CardTitle>
                  <FileText className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">34</div>
                  <p className="text-xs text-green-500 flex items-center">+8 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                  <CreditCard className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$8,234.60</div>
                  <p className="text-xs text-red-500 flex items-center">+12.5% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="invoices" className="space-y-4">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="invoices">Invoices</TabsTrigger>
                  <TabsTrigger value="expenses">Expenses</TabsTrigger>
                  <TabsTrigger value="clients">Clients</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Download className="h-3.5 w-3.5" />
                    Export
                  </Button>
                </div>
              </div>
              <TabsContent value="invoices" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Invoices</CardTitle>
                    <CardDescription>You have 6 invoices due this month.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-[1fr_100px_100px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div>
                          <p className="font-medium">INV-001</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Acme Inc.</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$1,200.00</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 14, 2023</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                            Paid
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_100px_100px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div>
                          <p className="font-medium">INV-002</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Globex Corp</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$2,500.00</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 19, 2023</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-900/30">
                            Pending
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_100px_100px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div>
                          <p className="font-medium">INV-003</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Soylent Corp</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$3,800.00</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 20, 2023</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-red-50 text-red-600 border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30">
                            Overdue
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_100px_100px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div>
                          <p className="font-medium">INV-004</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Initech</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$1,750.00</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 22, 2023</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                            Paid
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="expenses" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Expenses</CardTitle>
                    <CardDescription>You have 12 expenses this month.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-[1fr_100px_100px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div>
                          <p className="font-medium">Office Supplies</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Staples</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$120.00</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 10, 2023</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30">
                            Business
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_100px_100px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div>
                          <p className="font-medium">Software Subscription</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Adobe</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$49.99</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 12, 2023</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30">
                            Business
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_100px_100px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div>
                          <p className="font-medium">Client Lunch</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Restaurant</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$85.25</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 15, 2023</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-900/30">
                            Meals
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_100px_100px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div>
                          <p className="font-medium">Travel Expense</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Airline Tickets</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$350.00</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 18, 2023</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-900/30">
                            Travel
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="clients" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Clients</CardTitle>
                    <CardDescription>You have 8 active clients.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-[1fr_120px_120px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                            <AvatarFallback>AC</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Acme Inc.</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Technology</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$12,500.00</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">YTD Revenue</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">3</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_120px_120px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                            <AvatarFallback>GC</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Globex Corp</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Manufacturing</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$8,200.00</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">YTD Revenue</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">2</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_120px_120px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                            <AvatarFallback>SC</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Soylent Corp</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Food & Beverage</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$15,000.00</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">YTD Revenue</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">4</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_120px_120px_80px] items-center gap-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                            <AvatarFallback>IN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Initech</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Software</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">$6,800.00</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">YTD Revenue</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">1</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

function Menu({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

