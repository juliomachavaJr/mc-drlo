"use client";

import { useState, useEffect } from "react";
import { Calendar, Users, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

type Booking = {
  id: string;
  eventType: string;
  eventDate: string;
  location: string;
  language: string;
  status: string;
  createdAt: string;
  client: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
};

const statusConfig = {
  PENDING: { icon: AlertCircle, color: "text-yellow-400", bg: "bg-yellow-400/10", label: "Pendente" },
  CONFIRMED: { icon: CheckCircle, color: "text-emerald-400", bg: "bg-emerald-400/10", label: "Confirmado" },
  CANCELLED: { icon: XCircle, color: "text-red-400", bg: "bg-red-400/10", label: "Cancelado" },
};

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bookings")
      .then((r) => r.json())
      .then((data) => { setBookings(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === "PENDING").length,
    confirmed: bookings.filter(b => b.status === "CONFIRMED").length,
  };

  return (
    <div className="min-h-screen bg-[#080808] text-secondary p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-display text-4xl text-secondary mb-2">Painel de Administração</h1>
        <p className="text-secondary/50 uppercase tracking-widest text-xs">MC DRLO · Gestão de Reservas</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Total de Reservas", value: stats.total, icon: Calendar },
          { label: "Revisão Pendente", value: stats.pending, icon: Clock },
          { label: "Confirmados", value: stats.confirmed, icon: CheckCircle },
        ].map((stat, idx) => (
          <div key={idx} className="bg-primary border border-white/5 p-6 flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-3xl font-display text-secondary">{stat.value}</p>
              <p className="text-xs text-secondary/50 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bookings Table */}
      <div className="bg-primary border border-white/5">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="font-display text-2xl text-secondary">Todos os Pedidos de Reserva</h2>
          <div className="flex items-center gap-2 text-secondary/50">
            <Users className="w-4 h-4" />
            <span className="text-sm">{bookings.length} pedidos</span>
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center text-secondary/50">A carregar...</div>
        ) : bookings.length === 0 ? (
          <div className="p-12 text-center text-secondary/50">Ainda não existem reservas.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5 text-xs text-secondary/40 uppercase tracking-widest">
                  <th className="text-left p-4">Cliente</th>
                  <th className="text-left p-4">Tipo de Evento</th>
                  <th className="text-left p-4">Data</th>
                  <th className="text-left p-4">Localização</th>
                  <th className="text-left p-4">Idioma</th>
                  <th className="text-left p-4">Estado</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => {
                  const status = statusConfig[booking.status as keyof typeof statusConfig] ?? statusConfig.PENDING;
                  return (
                    <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="text-secondary font-medium">{booking.client.firstName} {booking.client.lastName}</p>
                          <p className="text-xs text-secondary/50">{booking.client.email}</p>
                        </div>
                      </td>
                      <td className="p-4 text-secondary/80">{booking.eventType}</td>
                      <td className="p-4 text-secondary/80">{new Date(booking.eventDate).toLocaleDateString("en-GB")}</td>
                      <td className="p-4 text-secondary/80">{booking.location}</td>
                      <td className="p-4 text-secondary/80">{booking.language}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                          <status.icon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
