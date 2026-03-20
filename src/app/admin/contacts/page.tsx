"use client"

import { useState } from "react"
import { Search, Filter, MessageSquare, CheckCircle, Clock, Eye, Reply, Archive, Trash2, Mail, Phone, MapPin } from "lucide-react"

const mockContacts = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+234 123 456 7890",
    department: "general",
    subject: "General Inquiry",
    message: "I would like to learn more about your programs in Lagos.",
    status: "new",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Sarah Miller",
    email: "sarah@example.com",
    phone: null,
    department: "partnerships",
    subject: "Partnership Proposal",
    message: "Our company would like to partner with SCHF for employee health screening.",
    status: "in_progress",
    createdAt: "2024-01-14T15:45:00Z",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "+234 987 654 3210",
    department: "medical",
    subject: "Treatment Information",
    message: "What are the requirements for the treatment support program?",
    status: "resolved",
    createdAt: "2024-01-13T09:20:00Z",
  },
  {
    id: "4",
    name: "Emily Robinson",
    email: "emily@example.com",
    phone: null,
    department: "donations",
    subject: "Donation Question",
    message: "Can I make a tax-deductible donation through bank transfer?",
    status: "new",
    createdAt: "2024-01-12T14:10:00Z",
  },
]

const statusConfig = {
  new: { color: "text-blue-700", bg: "bg-blue-100", label: "New", icon: MessageSquare },
  in_progress: { color: "text-yellow-700", bg: "bg-yellow-100", label: "In Progress", icon: Clock },
  resolved: { color: "text-green-700", bg: "bg-green-100", label: "Resolved", icon: CheckCircle },
}

const departmentLabels: Record<string, string> = {
  general: "General",
  medical: "Medical Services",
  partnerships: "Partnerships",
  donations: "Donations",
  volunteer: "Volunteering",
}

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedContact, setSelectedContact] = useState<typeof mockContacts[0] | null>(null)

  const filteredContacts = mockContacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (statusFilter === "all") return matchesSearch
    return matchesSearch && contact.status === statusFilter
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Contact Messages</h2>
          <p className="text-foreground-light">Manage inquiries from the contact form</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-foreground-light text-sm">Total Messages</p>
          <p className="text-2xl font-bold text-foreground">{mockContacts.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-foreground-light text-sm">New</p>
          <p className="text-2xl font-bold text-blue-600">{mockContacts.filter(c => c.status === "new").length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-foreground-light text-sm">In Progress</p>
          <p className="text-2xl font-bold text-yellow-600">{mockContacts.filter(c => c.status === "in_progress").length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <p className="text-foreground-light text-sm">Resolved</p>
          <p className="text-2xl font-bold text-green-600">{mockContacts.filter(c => c.status === "resolved").length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contacts List */}
        <div className="lg:col-span-2">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-light" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-10"
              />
            </div>
            <div className="flex gap-2">
              {["all", "new", "in_progress", "resolved"].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                    statusFilter === status
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-foreground hover:bg-gray-200"
                  }`}
                >
                  {status === "all" ? "All" : status === "in_progress" ? "Progress" : status}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 font-medium text-foreground">Contact</th>
                  <th className="text-left px-6 py-4 font-medium text-foreground">Subject</th>
                  <th className="text-left px-6 py-4 font-medium text-foreground">Department</th>
                  <th className="text-left px-6 py-4 font-medium text-foreground">Status</th>
                  <th className="text-left px-6 py-4 font-medium text-foreground">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredContacts.map((contact) => {
                  const status = statusConfig[contact.status as keyof typeof statusConfig]
                  const StatusIcon = status.icon
                  
                  return (
                    <tr
                      key={contact.id}
                      onClick={() => setSelectedContact(contact)}
                      className={`hover:bg-gray-50 cursor-pointer ${
                        selectedContact?.id === contact.id ? "bg-primary/5" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-foreground">{contact.name}</p>
                          <p className="text-sm text-foreground-light">{contact.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-foreground">{contact.subject}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground-light">
                          {departmentLabels[contact.department]}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-foreground-light">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit">
          {selectedContact ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Message Details</h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg" title="Reply">
                    <Reply className="w-4 h-4 text-foreground" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg" title="Archive">
                    <Archive className="w-4 h-4 text-foreground" />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-lg" title="Delete">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground text-lg">{selectedContact.name}</h4>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig[selectedContact.status as keyof typeof statusConfig].bg} ${statusConfig[selectedContact.status as keyof typeof statusConfig].color}`}>
                    {statusConfig[selectedContact.status as keyof typeof statusConfig].label}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-foreground-light">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${selectedContact.email}`} className="hover:text-primary">
                      {selectedContact.email}
                    </a>
                  </div>
                  {selectedContact.phone && (
                    <div className="flex items-center gap-3 text-foreground-light">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${selectedContact.phone}`} className="hover:text-primary">
                        {selectedContact.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-foreground-light mb-1">Subject</p>
                  <p className="font-medium text-foreground">{selectedContact.subject}</p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-foreground-light mb-1">Department</p>
                  <p className="font-medium text-foreground">{departmentLabels[selectedContact.department]}</p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-foreground-light mb-2">Message</p>
                  <p className="text-foreground bg-gray-50 p-4 rounded-lg">
                    {selectedContact.message}
                  </p>
                </div>

                <div className="pt-4">
                  {selectedContact.status !== "resolved" ? (
                    <button className="w-full btn-primary flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Mark as Resolved
                    </button>
                  ) : (
                    <button className="w-full btn-secondary flex items-center justify-center gap-2">
                      <Reply className="w-5 h-5" />
                      Reply
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-foreground-light mx-auto mb-4" />
              <p className="text-foreground-light">Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
