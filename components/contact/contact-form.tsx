"use client"

import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, ChevronDown, Send } from "lucide-react"
import { services, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ease } from "@/components/site/motion"

type Fields = { name: string; email: string; organisation: string; topic: string; message: string }
const empty: Fields = { name: "", email: "", organisation: "", topic: "", message: "" }

const topics = [...services.map((s) => s.title), "Partnership opportunity", "Training request", "Other"]

export function ContactForm() {
  const [data, setData] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [sent, setSent] = useState(false)

  // Pre-select a topic when arriving from a "Discuss this service" link
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("topic")
    if (t && topics.includes(t)) setData((d) => ({ ...d, topic: t }))
  }, [])

  const validate = () => {
    const e: typeof errors = {}
    if (!data.name.trim()) e.name = "Please tell us your name"
    if (!data.email.trim()) e.email = "Please add your email"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Please enter a valid email"
    if (!data.message.trim()) e.message = "Please add a short message"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setData((d) => ({ ...d, [name]: value }))
    if (errors[name as keyof Fields]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    const subject = `${data.topic || "Website enquiry"} — ${data.name}${data.organisation ? ` (${data.organisation})` : ""}`
    const lines = [data.message, "", "—", `Name: ${data.name}`, `Email: ${data.email}`]
    if (data.organisation) lines.push(`Organisation: ${data.organisation}`)
    if (data.topic) lines.push(`Topic: ${data.topic}`)
    const body = lines.join("\n")
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field =
    "w-full rounded-xl border bg-background/60 px-4 py-3.5 text-[0.95rem] text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10"

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-[0_40px_80px_-40px_rgba(14,59,42,0.35)] sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex min-h-[28rem] flex-col items-center justify-center text-center"
          >
            <span className="grid h-20 w-20 place-items-center rounded-full bg-secondary/10 text-secondary">
              <CheckCircle2 className="h-10 w-10" />
            </span>
            <h3 className="mt-6 text-3xl text-primary">Thank you, {data.name.split(" ")[0]}!</h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
              Your email app should now be open with your message ready to send. If it didn’t open, write to us directly
              at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-secondary underline-offset-4 hover:underline">
                {site.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false)
                setData(empty)
              }}
              className="mt-8 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={onSubmit}
            noValidate
            className="space-y-5"
          >
            <div>
              <h2 className="text-3xl text-primary md:text-4xl">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">We usually respond within two working days.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" error={errors.name} htmlFor="name" required>
                <input id="name" name="name" autoComplete="name" value={data.name} onChange={onChange} placeholder="Jane Namusoke" className={cn(field, errors.name ? "border-destructive" : "border-input")} />
              </Field>
              <Field label="Email address" error={errors.email} htmlFor="email" required>
                <input id="email" name="email" type="email" autoComplete="email" value={data.email} onChange={onChange} placeholder="you@organisation.org" className={cn(field, errors.email ? "border-destructive" : "border-input")} />
              </Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Organisation" htmlFor="organisation">
                <input id="organisation" name="organisation" autoComplete="organization" value={data.organisation} onChange={onChange} placeholder="Optional" className={cn(field, "border-input")} />
              </Field>
              <Field label="How can we help?" htmlFor="topic">
                <div className="relative">
                  <select id="topic" name="topic" value={data.topic} onChange={onChange} className={cn(field, "appearance-none border-input pr-11", !data.topic && "text-foreground/40")}>
                    <option value="">Select a topic</option>
                    {topics.map((t) => (
                      <option key={t} value={t} className="text-foreground">
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/60" />
                </div>
              </Field>
            </div>
            <Field label="Message" error={errors.message} htmlFor="message" required>
              <textarea id="message" name="message" rows={6} value={data.message} onChange={onChange} placeholder="Tell us about your programme, project or question…" className={cn(field, "resize-none", errors.message ? "border-destructive" : "border-input")} />
            </Field>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary py-4 font-semibold text-white transition-all hover:bg-forest-deep active:scale-[0.99] sm:w-auto sm:px-10"
            >
              Send message
              <Send className="h-4 w-4 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-primary">
        {label}
        {required && <span className="ml-0.5 text-secondary">*</span>}
      </label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}
