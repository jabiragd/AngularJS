using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Script.Serialization;

namespace T41_RouteResolve
{
    /// <summary>
    /// Summary description for StudentService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class StudentService : System.Web.Services.WebService
    {

        private int threadcount = 0;

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        public void GetAllStudents()
        {
            //System.Diagnostics.Debug.WriteLine("step 1");
            List<Student> studentList = new List<Student>();
            threadcount += 1;
            System.Threading.Thread.Sleep(10000);

            System.Diagnostics.Debug.WriteLine("step 2");
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;

            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from tblStudents", con);
                con.Open();

                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    Student student = new Student();
                    student.id = Convert.ToInt32(rdr["id"]);
                    student.name = rdr["name"].ToString();
                    student.gender = rdr["gender"].ToString();
                    student.city = rdr["city"].ToString();

                    studentList.Add(student);
                }

                Student st = new Student();
                st.id = threadcount;
                st.name = "test";
                st.gender = "male";
                st.city = "DUbai";
                studentList.Add(st);

                //System.Diagnostics.Debug.WriteLine("step 3 : threadcount = "+ threadcount);

                JavaScriptSerializer js = new JavaScriptSerializer();
                Context.Response.Write(js.Serialize(studentList));
            }
        }

        [WebMethod]
        public void GetStudent(int id)
        {
            Student student = new Student();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;

            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from tblStudents where id = @id", con);

                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@id",
                    Value = id
                };
                cmd.Parameters.Add(param);
                con.Open();

                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    student.id = Convert.ToInt32(rdr["id"]);
                    student.name = rdr["name"].ToString();
                    student.gender = rdr["gender"].ToString();
                    student.city = rdr["city"].ToString();
                }

                JavaScriptSerializer js = new JavaScriptSerializer();
                Context.Response.Write(js.Serialize(student));
            }
        }

        [WebMethod]
        public void GetStudentsByName(string name)
        {
            List<Student> studentList = new List<Student>();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;

            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from tblStudents where name like @name", con);

                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@name",
                    Value = name +"%"
                };

                cmd.Parameters.Add(param);
                con.Open();

                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    Student student = new Student();
                    student.id = Convert.ToInt32(rdr["id"]);
                    student.name = rdr["name"].ToString();
                    student.gender = rdr["gender"].ToString();
                    student.city = rdr["city"].ToString();

                    studentList.Add(student);
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(studentList));

        }
    }
}
