interface AITool {

  id: string;

  name: string;

  provider: string;

  category: string;

  description?: string;

  monthlyCost?: number;

  departments?: string[];

}



interface Props {

  tools: AITool[];

}



export default function AIToolTable({

  tools,

}: Props) {


  return (

    <div className="bg-white rounded-xl shadow overflow-hidden">


      <table className="w-full">


        <thead className="bg-gray-100">


          <tr>


            <th className="p-4 text-left">
              Tool
            </th>



            <th className="p-4 text-center">
              Provider
            </th>



            <th className="p-4 text-center">
              Category
            </th>



            <th className="p-4 text-center">
              Monthly Cost
            </th>



            <th className="p-4 text-center">
              Departments
            </th>


          </tr>


        </thead>





        <tbody>


        {
          tools.length === 0 ? (


            <tr>


              <td

                colSpan={5}

                className="p-6 text-center text-gray-500"

              >

                No AI tools found


              </td>


            </tr>



          ) : (



            tools.map((tool)=>(


              <tr

                key={tool.id}

                className="border-t hover:bg-gray-50"

              >



                <td className="p-4">


                  <div className="font-semibold">

                    {tool.name}

                  </div>


                  {
                    tool.description && (

                      <p className="text-sm text-gray-500 mt-1">

                        {tool.description}

                      </p>

                    )

                  }


                </td>





                <td className="p-4 text-center">

                  {tool.provider}


                </td>





                <td className="p-4 text-center">

                  {tool.category}


                </td>





                <td className="p-4 text-center font-medium">


                  ₹
                  {(tool.monthlyCost ?? 0)
                    .toLocaleString()}


                </td>





                <td className="p-4 text-center">


                  {
                    tool.departments &&
                    tool.departments.length > 0 ? (


                      <div className="flex flex-wrap justify-center gap-2">


                        {
                          tool.departments.map(
                            (dept,index)=>(

                              <span

                                key={index}

                                className="rounded-full bg-slate-100 px-3 py-1 text-xs"

                              >

                                {dept}

                              </span>


                            )

                          )

                        }


                      </div>



                    ) : (


                      <span className="text-gray-400">

                        -

                      </span>


                    )

                  }


                </td>




              </tr>


            ))


          )

        }


        </tbody>


      </table>


    </div>

  );

}