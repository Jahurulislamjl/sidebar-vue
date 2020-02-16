<template>
    <!-- ordre section -->
    <div id="favourite-body">

        <div id="sales-order" class="p-3">
          <div class="mb-2">
              <h6>Sales Order / New</h6>
          </div>
          <div>
            <button class="btn save py-0">SAVE</button>
            <button class="discard">DISCARD</button>
          </div>
        </div>

  <!-- main section -->

      <div id="main-section" class="d-flex">
        <div class="main-left">
            <div class="nav navbar-expand-md  main-left-header px-3 d-flex" >
                <div class="nav-item-left my-1">
                    <button class="btn btn-active">SEND BY EMAIL</button>
                    <button class="btn">CONFIRM</button>
                    <button class="btn">CANCEL</button>
                </div>
                <div class="nav-item-right d-flex">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a href="" class="nav-link active">QUESTION</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">QUESTION SENT</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">SALLS ORDER</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="question-section px-4 pt-3 pb-5 ">

                <div class="customer-review">
                    <div class="header px-5">
                        <div class="icon-cr d-flex justify-content-end">
                            <i class="icon mx-3 pl-2">icon</i>
                            <p>Customer <br> Preview</p>
                        </div>
                    </div>
                    <div class="px-3 py-2">
                        <h4 class="text-left">New</h4>
                    </div>

                    <div class="customer-input  d-flex">
                        <div class="input-left p-3">
                            <div class="form-group d-flex">
                                <label for="customer" >Customer</label>
                                <select name="customer" id="customer" class="form-control"></select>
                            </div>
                        </div>
                        <div class="input-right px-4 py-3">
                            <div class="form-group d-flex">
                                <label for="ex">Expiration</label>
                                <select name="ex" id="ex" class="form-control"></select>
                            </div>
                            <div class="form-group d-flex">
                                <label for="py">Payment Terms</label>
                                <select name="py" id="py" class="form-control"></select>
                            </div>
                        </div>
                    </div>

                    <div class="product-checkout">

                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#table-content" class="nav-link ">Order Lines</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link">Optional Products</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link">Other Info</a>
                                </li>
                            </ul>


                        <div class="tab-content">
                            <div id="table-content">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="text-center pl-0">Product</th>
                                            <th class="text-right pr-0">Discription</th>
                                            <th class="text-right pr-0">Quantity</th>
                                            <th class="text-center px-0">Unit Price</th>
                                            <th class="pl-0">Taxes</th>
                                            <th class="text-center">SubTotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center pl-0">Walton</td>
                                            <td class="text-right">Walton</td>
                                            <td class="text-right pr-0">1.000</td>
                                            <td class="text-center px-0">0.00</td>
                                            <td class="pl-0"><span class="tax">Tax 15.00%</span> </td>
                                            <td class="text-center">0.00</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="add-btn px-4">
                                    <a href="">Add a product</a>
                                    <a href="" class="mx-3">Add a section</a>
                                    <a href="">Add a note</a>
                                </div>
                                <div class="bg-light py-2">
                                </div>

                                <div class="terms-total-section px-2 py-5 d-flex">
                                    <div class="terms-condition mr-5">
                                        <textarea class="form-control trm-con " placeholder="Terms and conditions..."></textarea>
                                    </div>
                                    <div class="amount ml-5">
                                        <hr>
                                        <div class="d-flex">
                                            <p class="txt">Untaxed Amount:  </p>
                                            <p class="balance">$0.00</p>
                                        </div>
                                        <div class="d-flex">
                                            <p class="txt">Taxes:  </p>
                                            <p class="balance">$0.00</p>
                                        </div>
                                        <hr>
                                        <div class="d-flex">
                                            <p class="txt">Total:  </p>
                                            <p class="balance">$0.00</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-right">

            <div class="nav navbar-expand-md  main-right-header px-1 pb-3 d-flex" >
                <div class="nav-item-left">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a href="" class="nav-link active">Send message</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Log note</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">Schedule activity </a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">i</a>
                        </li>
                    </ul>
                </div>
                <div class="nav-item-right d-flex">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <a href="" class="nav-link active">Follow</a>
                        </li>
                        <li class="nav-item">
                            <a href="" class="nav-link">i</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <fieldset>
                    <legend>Today</legend>
                </fieldset>
            </div>

        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "favourites"
    }
</script>

<style scoped>

</style>