public class SumFrom1toN
{
	public void sum(int n) 
	{
		int res = 0;
		while (n > 0) 
		{
			res += n;
			n--;
		}
		System.out.println(res);
	}
	
	public static void main(String[] args)
	{
		SumFrom1toN s = new SumFrom1toN();
		s.sum(3); // 6 (1+2+3)
		s.sum(5); // 15
		s.sum(0); // 0
		s.sum(-3); // 0
	}
}
