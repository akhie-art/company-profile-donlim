"use client";

import * as React from "react";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { cn } from "cn";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/components/language-provider";

interface ContactSectionProps {
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection({
  selectedTopic,
  onTopicChange,
}: ContactSectionProps) {
  const { t } = useLanguage();

  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};

    if (!name.trim()) {
      nextErrors.name = t.contact.validation.nameRequired;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = t.contact.validation.emailInvalid;
    }
    if (message.trim().length < 15) {
      nextErrors.message = t.contact.validation.messageMin;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
  };

  const selectedTopicLabel =
    t.contact.fields.topics.find((item) => item.value === selectedTopic)
      ?.label ?? selectedTopic;

  return (
    <section id="contact" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <Badge variant="brand" className="mb-4">
            {t.contact.eyebrow}
          </Badge>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#020617] sm:text-4xl leading-[1.18]">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Left: Plant Location & Departments (5 cols) */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-7">
              <div className="flex items-start gap-3.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-[#FB9704]">
                  <MapPin className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[11px] font-semibold tracking-wider text-[#0547D4] uppercase">
                    {t.contact.coordinates}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-[#020617]">
                    {t.contact.plantTitle}
                  </h3>
                </div>
              </div>

              <address className="mt-5 space-y-1 text-sm leading-relaxed text-slate-700 not-italic">
                {t.contact.plantAddress.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>

              <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <Clock
                  className="size-4 shrink-0 text-[#0547D4]"
                  aria-hidden="true"
                />
                <div>
                  <span className="font-medium text-[#0F172A]">
                    {t.contact.hoursLabel}:{" "}
                  </span>
                  <span>{t.contact.hoursValue}</span>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jatengland+Industrial+Park+Sayung+Demak+Jawa+Tengah"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "mt-5 w-full justify-between"
                )}
              >
                <span>{t.contact.mapButton}</span>
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>

            {/* Department Channels */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-7">
              <h3 className="font-heading text-base font-semibold text-[#020617]">
                {t.contact.departmentsTitle}
              </h3>
              <ul className="mt-4 divide-y divide-slate-100">
                {t.contact.departments.map((dept) => (
                  <li
                    key={dept.email}
                    className="py-3.5 first:pt-0 last:pb-0"
                  >
                    <p className="font-heading text-sm font-semibold text-[#0F172A]">
                      {dept.role}
                    </p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#0547D4] transition-colors hover:text-[#0438AA] hover:underline"
                    >
                      <Mail className="size-3.5" aria-hidden="true" />
                      {dept.email}
                    </a>
                    <p className="mt-1 text-xs text-slate-600">{dept.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Accessible Validated Inquiry Form (7 cols) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 lg:col-span-7">
            <h3 className="font-heading text-2xl font-semibold text-[#020617]">
              {t.contact.formTitle}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              {t.contact.formSubtitle}
            </p>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8"
              >
                <div className="flex items-start gap-3.5">
                  <CheckCircle2
                    className="mt-0.5 size-6 shrink-0 text-[#047857]"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-[#020617]">
                      {t.contact.successTitle}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {t.contact.successMessage}
                    </p>
                    <dl className="mt-5 grid gap-2 rounded-xl border border-emerald-200/80 bg-white p-4 text-xs sm:grid-cols-2">
                      <div>
                        <dt className="font-mono text-slate-500 uppercase">
                          {t.contact.fields.name}
                        </dt>
                        <dd className="mt-0.5 font-semibold text-[#0F172A]">
                          {name}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-slate-500 uppercase">
                          {t.contact.fields.topic}
                        </dt>
                        <dd className="mt-0.5 font-semibold text-[#0547D4]">
                          {selectedTopicLabel}
                        </dd>
                      </div>
                    </dl>
                    <Button
                      type="button"
                      variant="outline"
                      size="default"
                      onClick={handleReset}
                      className="mt-6"
                    >
                      {t.contact.successReset}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-7 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="inquiry-name"
                      className="text-sm font-medium text-[#0F172A]"
                    >
                      {t.contact.fields.name}{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="inquiry-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      placeholder={t.contact.fields.namePlaceholder}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "inquiry-name-error" : undefined
                      }
                      className="h-11 rounded-lg border-slate-300 bg-white px-3.5 text-sm text-[#020617] placeholder:text-slate-400"
                    />
                    {errors.name && (
                      <p
                        id="inquiry-name-error"
                        role="alert"
                        className="text-xs font-medium text-destructive"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="inquiry-company"
                      className="text-sm font-medium text-[#0F172A]"
                    >
                      {t.contact.fields.company}
                    </Label>
                    <Input
                      id="inquiry-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={t.contact.fields.companyPlaceholder}
                      className="h-11 rounded-lg border-slate-300 bg-white px-3.5 text-sm text-[#020617] placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="inquiry-email"
                      className="text-sm font-medium text-[#0F172A]"
                    >
                      {t.contact.fields.email}{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="inquiry-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      placeholder={t.contact.fields.emailPlaceholder}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "inquiry-email-error" : undefined
                      }
                      className="h-11 rounded-lg border-slate-300 bg-white px-3.5 text-sm text-[#020617] placeholder:text-slate-400"
                    />
                    {errors.email && (
                      <p
                        id="inquiry-email-error"
                        role="alert"
                        className="text-xs font-medium text-destructive"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="inquiry-phone"
                      className="text-sm font-medium text-[#0F172A]"
                    >
                      {t.contact.fields.phone}
                    </Label>
                    <Input
                      id="inquiry-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contact.fields.phonePlaceholder}
                      className="h-11 rounded-lg border-slate-300 bg-white px-3.5 text-sm text-[#020617] placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="inquiry-topic"
                    className="text-sm font-medium text-[#0F172A]"
                  >
                    {t.contact.fields.topic}
                  </Label>
                  <select
                    id="inquiry-topic"
                    name="topic"
                    value={selectedTopic}
                    onChange={(e) => onTopicChange(e.target.value)}
                    className="flex h-11 w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-[#020617] transition-colors outline-none focus-visible:border-[#0547D4] focus-visible:ring-3 focus-visible:ring-[#0547D4]/20"
                  >
                    {t.contact.fields.topics.map((topic) => (
                      <option key={topic.value} value={topic.value}>
                        {topic.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="inquiry-message"
                    className="text-sm font-medium text-[#0F172A]"
                  >
                    {t.contact.fields.message}{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="inquiry-message"
                    name="message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) {
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }
                    }}
                    placeholder={t.contact.fields.messagePlaceholder}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "inquiry-message-error" : undefined
                    }
                    className="min-h-28 rounded-lg border-slate-300 bg-white p-3.5 text-sm text-[#020617] placeholder:text-slate-400"
                  />
                  {errors.message && (
                    <p
                      id="inquiry-message-error"
                      role="alert"
                      className="text-xs font-medium text-destructive"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="default"
                    size="xl"
                    className="w-full sm:w-auto"
                  >
                    <Send className="size-4" aria-hidden="true" />
                    {t.contact.fields.submit}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
