import * as VM from "@voidmerge/voidmerge-code"

VM.defineVoidMergeHandler(async (req) => {
  const type = req.type;

  if (req instanceof VM.RequestObjCheck) {
    // All data is valid:
    return new VM.ResponseObjCheckOk();
  } else if (req instanceof VM.RequestFn) {
    return new VM.ResponseFnOk({
      status: 200,
      body: new TextEncoder().encode("Hello World!"),
      headers: {
        "content-type": "text/plain",
      },
    });
  }

  throw new Error(`invalid request type: ${type}`);
})
