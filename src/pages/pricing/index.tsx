import { NextPage } from "next"
import Link from "next/link"
import React from "react"

import clsxm from "@/lib/clsxm"
import { gabarito } from "@/lib/fonts"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Label,
} from "@/components"
import IconComponent from "@/components/GenericIcon/IconComponent"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

const Pricing: NextPage = () => {
  return (
    <Layout>
      <Seo
        templateTitle="Pricing"
        description="Decentractive pricing, detail of the service price"
      />
      <main>
        <section className="text-center py-20 px-4">
          <h1
            className={`text-5xl font-semibold sm:text-7xl tracking-tight ${gabarito.className} mb-4`}
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <span className="hidden sm:block align-top text-balance">
              Pay only for what you use
            </span>
            <span className="sm:hidden">Pay only for what you use</span>
          </h1>
          <p
            className="text-lg text-muted-foreground mb-10"
            data-aos="fade-up"
            data-aos-delay="10"
          >
            No hidden fees, no surprises. Only pay for the resources you use.
          </p>
          {/* <div className="flex justify-center space-x-6">
            <RadioCardsRoot
              defaultValue={paymentPeriod}
              className="md:grid-cols-2"
              onValueChange={setPaymentPeriod}
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <RadioCardsItem value="monthly">
                <div className="flex flex-col w-full">
                  <span className="font-semibold">Monthly</span>
                  <span className="text-xs text-muted-foreground">
                    Pay each month
                  </span>
                </div>
              </RadioCardsItem>
              <RadioCardsItem value="annually">
                <div className="flex flex-col w-full">
                  <span className="font-semibold">Annually</span>
                  <span className="text-xs text-muted-foreground">
                    Pay once a year
                  </span>
                </div>
              </RadioCardsItem>
            </RadioCardsRoot>
          </div> */}
          <div className="lg:mt-12 grow flex flex-col-reverse lg:flex-row items-center lg:items-stretch lg:justify-center">
            <div
              className="flex-1 my-8 relative -top-10 lg:top-auto lg:left-8 w-full px-5 lg:px-0 sm:max-w-[461px]"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <div className="h-full flex flex-col rounded-lg border">
                <div className="p-6">
                  <div className="text-xl font-semibold text-left">Free</div>
                  <div className="mt-2 flex items-end gap-2">
                    <div className="font-semibold text-[36px] leading-[100%] slashZero">
                      $0
                    </div>
                    <div className="mt-1 text-13">per month</div>
                  </div>
                </div>
                <div className="grow pt-4 pb-6 border-t flex flex-col justify-between pr-6">
                  <ul className="mx-6 text-sm text-left">
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Up to 100 Decentralized Identifiers (DIDs) and Verifiable
                      Credentials (VCs) per month
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Basic DID creation and management tools
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Additional DIDs/VCs available at $0.15 per DID/VC after
                      100
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Basic monitoring capabilities
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Up to 5 alerts per month for key events (e.g., new
                      issuance, verification requests)
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      In-app notifications for quick status updates
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Monthly usage summary with key metrics (DID/VC usage,
                      verification counts)
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Basic usage insights with downloadable monthly summary
                      reports
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Growth tracking for DIDs and VCs over time
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Email-only support with response within 48 hours
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Notifications for basic incidents (e.g., system downtime,
                      security updates)
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Self-service support resources (FAQs, troubleshooting
                      guides)
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Basic activity logs with 7-day retention
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Access to user activity metrics and recent event history
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Option to upgrade to extended log retention with the Pro
                      plan
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      GDPR-compliant data handling and privacy controls
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Encrypted data storage for all issued credentials
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Privacy-focused user management with data protection
                      settings
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    variant="default"
                    className="mt-9 ml-5 lg:mr-6"
                  >
                    Start for free
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="z-10 flex-1 relative w-full rounded-lg border border-[#FF5557]/40 shadow-dark-elevation-1 backdrop-blur-2xl bg-gradient-to-b sm:max-w-[443px] from-[#FF5557]/40 to-accent/5"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <div className="p-6">
                <div className="font-semibold text-xl text-left">
                  Professional
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <div className="font-semibold text-[36px] leading-[100%]">
                    <div className="h-[36px] slashZero text-4xl">$149</div>
                  </div>
                  <div className="mt-1 text-smleading-[130%]">
                    starts at
                    <br />
                    per month
                  </div>
                </div>
              </div>
              <div className="grow pt-4 pb-6 border-t flex flex-col justify-between border-[#FF5557] lg:h-[calc(100%-135px)]">
                <ul className="mx-6 text-sm text-left">
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Up to 5,000 Decentralized Identifiers (DIDs) and Verifiable
                    Credentials (VCs) per month
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Scalable issuance and verification functionality
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Additional DIDs/VCs available at $0.08 per DID/VC after
                    5,000
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Advanced monitoring with up to 30 custom alerts per month
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Real-time notifications for important events (e.g.,
                    credential issuance, access requests)
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Customizable alert settings for targeted monitoring
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Advanced analytics dashboard with detailed usage metrics
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Growth and trend reports with data export options
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    User behavior insights and credential verification tracking
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    24/7 email support with priority escalation
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Timely notifications for incidents and critical updates
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Access to priority troubleshooting and support resources
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    6-month log retention for all activity and transaction logs
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Enhanced access to user activity metrics and event history
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Option to upgrade to extended 1-year log retention for an
                    additional fee
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    SOC 2-compliant data handling and enhanced privacy controls
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    Encrypted data storage and audit-ready logs for compliance
                    needs
                  </li>
                  <li className="mt-4">
                    <IconComponent
                      name="Check"
                      className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                    />
                    User permissions and access control settings to ensure data
                    security
                  </li>
                </ul>
                <Button
                  size="lg"
                  variant="default"
                  className="mt-9 text-sm w-[calc(100%-2rem)] mx-auto"
                >
                  Get started in 2 minutes
                </Button>
              </div>
            </div>
            <div
              className="lg:pl-6 flex-1 my-8 relative -bottom-10 lg:bottom-0 lg:top-auto lg:-left-8 w-full px-5 lg:px-0 sm:max-w-[461px]"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              <div className="h-full flex flex-col rounded-lg border">
                <div className="p-6 lg:pl-12">
                  <div className="text-xl font-semibold text-left">
                    Enterprise
                  </div>
                  <div className="mt-2 flex items-end gap-2">Custom price</div>
                </div>
                <div className="grow pt-4 pb-6 border-t flex flex-col justify-between lg:pl-6">
                  <ul className="mx-6 text-sm text-left">
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Custom volume of Decentralized Identifiers (DIDs) and
                      Verifiable Credentials (VCs) based on organization needs
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      High-volume issuance and verification with priority
                      handling
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Volume-based pricing for additional DIDs/VCs with
                      discounts
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Real-time monitoring with unlimited custom alerts
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      SLA-backed response times with proactive issue detection
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Customizable notifications and alert escalation settings
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Fully customizable analytics dashboard with API access for
                      data integration
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Advanced data visualization and trend analysis tools
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Custom reports scheduled for automated delivery
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      24/7 dedicated incident response team with personalized
                      support
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Dedicated account manager for priority issue resolution
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Comprehensive incident handling with SLA-backed escalation
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      1-year log retention with custom retention period options
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Real-time access to detailed logs and metrics
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Enhanced audit logging for compliance and regulatory
                      requirements
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Full compliance suite: GDPR, HIPAA, SOC 2, and eIDAS
                      certifications
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Custom data residency options (e.g., geographic
                      restrictions for data storage)
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Advanced access control, permissions management, and
                      dedicated compliance support
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Tailored onboarding program for streamlined setup and team
                      integration
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      In-depth training sessions and personalized workshops
                    </li>
                    <li className="mt-4">
                      <IconComponent
                        name="Check"
                        className="mr-1 mt-[-2px] shrink-0 w-4 h-4 inline"
                      />
                      Access to dedicated support resources and ongoing
                      consultation
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    variant="default"
                    className="mt-9 mx-5 lg:mr-6"
                  >
                    Contact sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="mt-24 md:mt-28 container mx-auto flex flex-col items-center max-w-[1019px]"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <h2
            className={`mx-5 pb-2 font-bold text-center text-5xl leading-[100%] ${gabarito.className}`}
          >
            Frequently asked questions
          </h2>
          <p className="mx-5 mt-3 text-center md:text-xl max-w-[764px]">
            At decentractive, we strive to provide the best service possible. If
            you have any questions, please check our FAQ below or please get in
            touch at{" "}
            <Link
              className="text-[#FF5557]"
              href="mailto:contact@decentractive.io?subject=Question%20about%20Decentractive&amp;body="
            >
              contact@decentractive.io
            </Link>
          </p>
          <Accordion
            type="single"
            collapsible
            className="mt-11 w-full border rounded-[19px] mb-20 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="10"
          >
            <AccordionItem
              value="What is Decentractive’s Freemium Plan, and what does it
                    include?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    What is Decentractive’s Freemium Plan, and what does it
                    include?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                The Freemium Plan is our entry-level, no-cost plan that allows
                users to get started with up to 100 Decentralized Identifiers
                (DIDs) and Verifiable Credentials (VCs) per month. It includes
                basic monitoring, monthly usage reports, 7-day log retention,
                and GDPR-compliant security.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="How do additional DIDs/VCs work, and how much do they cost?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    How do additional DIDs/VCs work, and how much do they cost?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                If you exceed the DIDs/VCs included in your plan, you can
                purchase additional credentials. On the Freemium plan, extra
                DIDs/VCs cost $0.15 each, while on the Professional plan, they
                cost $0.08 each. Enterprise customers receive custom pricing
                based on volume.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="What are the key differences between the Freemium, Professional, and Enterprise plans?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    What are the key differences between the Freemium,
                    Professional, and Enterprise plans?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                The Freemium plan includes limited DIDs/VCs, basic monitoring,
                and minimal support. The Professional plan adds more DIDs/VCs,
                advanced monitoring, extended log retention, and scheduled
                reports. Enterprise includes unlimited alerts, SLA-backed
                support, custom compliance options, and real-time analytics,
                with dedicated support for larger organizations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="Can I upgrade from Freemium to Professional?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    Can I upgrade from Freemium to Professional?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                Yes! You can upgrade anytime to access the additional features
                and higher usage limits in the Professional plan. Simply log in
                to your account and navigate to the subscription settings to
                upgrade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="Is there a free trial for the Professional or Enterprise plans?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    Is there a free trial for the Professional or Enterprise
                    plans?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                Yes, we offer a 14-day free trial of the Professional plan,
                giving you full access to advanced monitoring, analytics, and
                reporting features. To trial Enterprise features, please contact
                our sales team to discuss custom options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="What type of monitoring and alerts are available on each plan?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    What type of monitoring and alerts are available on each
                    plan?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                The Freemium plan includes basic monitoring with up to 5 alerts
                per month. The Professional plan provides 30 custom alerts with
                notifications via email, SMS, and in-app. The Enterprise plan
                offers real-time, unlimited alerts with multi-channel
                notifications and SLA-backed response times.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="What is included in the Enterprise compliance suite?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    What is included in the Enterprise compliance suite?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                The Enterprise compliance suite includes GDPR, HIPAA, SOC 2, and
                eIDAS compliance options, along with custom data residency,
                dedicated compliance support, and audit-ready logging for
                industry-specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="What types of reports are available in the Reporting & Analytics feature?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    What types of reports are available in the Reporting &
                    Analytics feature?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                In the Freemium plan, users receive a basic monthly usage
                summary. The Professional plan offers a detailed dashboard with
                export options, weekly/monthly scheduled reports, and user
                behavior insights. Enterprise users receive fully customizable
                reports, API access, and compliance-ready data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="How does Decentractive handle security and data protection?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    How does Decentractive handle security and data protection?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                Decentractive takes security seriously, providing end-to-end
                encryption, role-based access control, and GDPR-compliant data
                handling. Enterprise customers receive additional support for
                SOC 2, HIPAA, and other compliance standards, ensuring that all
                data remains private and secure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="How do I get support if I encounter an issue?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    How do I get support if I encounter an issue?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                Freemium users receive email-only support, while Professional
                plan members have 24/7 email support with priority escalation.
                Enterprise customers benefit from a dedicated incident response
                team and SLA-backed support with on-call escalation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="What if I need additional reports or custom analytics?"
              className={clsxm(`px-3 transition-all`)}
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between space-x-6">
                  <Label className="flex flex-col space-y-1 text-left w-full text-xl px-2">
                    What if I need additional reports or custom analytics?
                  </Label>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg px-4 text-muted-foreground">
                Pro and Enterprise users can request additional custom reports
                or advanced data visualization features. Additional reports
                start at $25 each, with enhanced analytics options available at
                custom pricing based on your organization’s specific needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <div>
          <div className="pt-24 sm:pt-28">
            <section className="container mx-auto flex flex-col items-center">
              <h2
                className={`mt-2 md:mt-5 tracking-tight font-bold text-center text-[32px] md:text-[52px] lg:text-[64px] leading-[98%] ${gabarito.className}`}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Ready to Take Control of Your Digital Identity?
              </h2>
              <div
                data-aos="fade-up"
                data-aos-delay="10"
                className="flex flex-col"
              >
                <p className="mt-5 text-center md:text-xl max-w-4xl md:max-w-5xl">
                  Join Decentractive and experience a secure, privacy-first
                  approach to digital identity management. <br />
                  Choose the plan that fits your needs and start building trust
                  today.
                </p>
                <Button
                  size="lg"
                  className="mt-6 md:mt-8 w-full flex items-center mx-auto justify-center font-medium text-base sm:text-large-18 ring-2 ring-offset-2 h-[50px] max-w-[332px] ring-offset-white"
                  variant="default"
                >
                  Start for free
                </Button>
              </div>
              <div className="pb-20 md:pb-28 lg:pb-36"></div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Pricing
