import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const accordionItems = [
  {
    title: "Maleda auctor vitae non venenatis?",
    content: (
      <div>
        <p className="text-lg text-[#5C5C5C]">
          Vitae elementum donec vulputate volutpat urna ipsum euismod eu tellus
          vitae. Eros morbi morbi aenean tristique ut volutpat ultrices vel
          Elementum mollis justo odio tortor viverra. Viverra sociis aenean.
          <br />
          Scelerisque facilisis turpis pellentesque dolor imperdiet vellum.
        </p>
      </div>
    ),
  },
  {
    title: "Mattis viverra tempor in consectetur hendrerit vel?",
    content: (
      <div>
        <p className="text-lg text-[#5C5C5C]">
          Vitae elementum donec vulputate volutpat urna ipsum euismod eu tellus
          vitae. Eros morbi morbi aenean tristique ut volutpat ultrices vel
          Elementum mollis justo odio tortor viverra. Viverra sociis aenean.
          <br />
          Scelerisque facilisis turpis pellentesque dolor imperdiet vellum.
        </p>
      </div>
    ),
  },

  {
    title: "Porttitor ut sed ac faucibus augue?",
    content: (
      <div>
        <p className="text-lg text-[#5C5C5C]">
          Vitae elementum donec vulputate volutpat urna ipsum euismod eu tellus
          vitae. Eros morbi morbi aenean tristique ut volutpat ultrices vel
          Elementum mollis justo odio tortor viverra. Viverra sociis aenean.
          <br />
          Scelerisque facilisis turpis pellentesque dolor imperdiet vellum.
        </p>
      </div>
    ),
  },
];
const PaymentAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-[648px]">
      {accordionItems.map((item, index) => (
        <AccordionItem value={item.title} key={item.title}>
          <AccordionTrigger className="font-semibold">{item.title}</AccordionTrigger>
          <AccordionContent asChild>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default PaymentAccordion;
