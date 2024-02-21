import React, { useState } from "react";
import {
  reactExtension,
  Grid,
  TextField,
  PhoneField,
  BlockStack,
  useApplyMetafieldsChange,
  useMetafield,
  Checkbox,
  Button,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const [checked, setChecked] = useState(false);

  // Define the metafield namespace and key
  const metafieldNamespace = "yourAppNamespace";
  const metafieldKey = "deliveryInstructions";

  // Get a reference to the metafield
  const deliveryInstructions = useMetafield({
    namespace: metafieldNamespace,
    key: metafieldKey,
  });
  // Set a function to handle updating a metafield
  const applyMetafieldsChange = useApplyMetafieldsChange();

  // Set a function to handle the Checkbox component's onChange event
  const handleChange = () => {
    setChecked(!checked);
  };
  // Render the extension components
  return (
   <>
     <Grid
      columns={['75%', 'fill', 'auto']}
      rows={[, 'auto']}
      spacing="loose"
    >
         <PhoneField
      label="Phone"
      value="0493884989"
    />
    <Button
    onPress={() => {
      console.log('onPress event');
    }}
  >
    Send Code
  </Button>
    </Grid>

 </>

    
//  <>
//    <PhoneField
//       label="Phone"
//       value="0493884989"
//     />
//     <Button
//     onPress={() => {
//       console.log('onPress event');
//     }}
//   >
//     Pay now
//   </Button>
//  </>
    
      
    //       <Button></Button>

    //   {/* )} */}
    // </BlockStack>
);
}

// function Button(){
//   <Button></Button>
// }



